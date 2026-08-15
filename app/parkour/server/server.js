// server/server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.static(path.join(__dirname, '../client')));

const GAME_CONFIG = {
  MAX_PLAYERS_PER_ROOM: 4,
  PLAYER_SPEED: 200,
  JUMP_FORCE: 500,
  GRAVITY: 1000,
  TICK_RATE: 60
};

const rooms = new Map();
const players = new Map();

class GameRoom {
  constructor(roomId) {
    this.id = roomId;
    this.players = [];
    this.gameState = {
      entities: [],
      level: null,
      time: 0
    };
    this.maxPlayers = GAME_CONFIG.MAX_PLAYERS_PER_ROOM;
  }

  addPlayer(player) {
    if (this.players.length < this.maxPlayers) {
      this.players.push(player);
      return true;
    }
    return false;
  }

  removePlayer(playerId) {
    this.players = this.players.filter(p => p.id !== playerId);
  }

  getPlayersData() {
    return this.players.map(p => ({
      id: p.id,
      name: p.name,
      character: p.character,
      position: p.position,
      velocity: p.velocity,
      animation: p.animation,
      weapons: p.weapons,
      health: p.health
    }));
  }
}

class PlayerState {
  constructor(id, name, character) {
    this.id = id;
    this.name = name;
    this.character = character;
    this.position = { x: Math.random() * 1000, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.animation = 'idle';
    this.weapons = [
      { type: 'ranged', name: 'handgun', ammo: 30 },
      { type: 'melee', name: 'knife', durability: 100 }
    ];
    this.health = 100;
    this.isGrounded = false;
    this.isFacingRight = true;
  }
}

io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on('joinGame', (data) => {
    const { name, character, roomId } = data;
    
    let room = rooms.get(roomId);
    if (!room) {
      room = new GameRoom(roomId);
      rooms.set(roomId, room);
    }

    const player = new PlayerState(socket.id, name, character);
    
    if (!room.addPlayer(player)) {
      socket.emit('joinFailed', { reason: 'Room full' });
      return;
    }

    players.set(socket.id, { roomId, player });
    socket.join(roomId);

    socket.emit('joinSuccess', { roomId, players: room.getPlayersData() });
    io.to(roomId).emit('playerJoined', { player: player });
  });

  socket.on('playerInput', (data) => {
    const playerData = players.get(socket.id);
    if (!playerData) return;

    const { roomId, player } = playerData;
    const room = rooms.get(roomId);
    if (!room) return;

    const { velocity, action } = data;
    player.velocity = velocity;
    player.animation = action;

    io.to(roomId).emit('playerUpdated', {
      playerId: socket.id,
      position: player.position,
      velocity: player.velocity,
      animation: player.animation,
      isFacingRight: player.isFacingRight
    });
  });

  socket.on('fireWeapon', (data) => {
    const playerData = players.get(socket.id);
    if (!playerData) return;

    const { roomId, player } = playerData;
    const { weaponIndex, direction } = data;

    io.to(roomId).emit('weaponFired', {
      playerId: socket.id,
      position: player.position,
      weaponIndex,
      direction,
      weapon: player.weapons[weaponIndex]
    });
  });

  socket.on('disconnect', () => {
    const playerData = players.get(socket.id);
    if (playerData) {
      const room = rooms.get(playerData.roomId);
      if (room) {
        room.removePlayer(socket.id);
        io.to(playerData.roomId).emit('playerLeft', { playerId: socket.id });

        if (room.players.length === 0) {
          rooms.delete(playerData.roomId);
        }
      }
    }
    players.delete(socket.id);
    console.log(`Player disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
