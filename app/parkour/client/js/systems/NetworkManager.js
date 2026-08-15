// client/js/systems/NetworkManager.js
class NetworkManager {
  constructor(scene) {
    this.scene = scene;
    this.socket = io();
    this.playerId = null;
    this.roomId = null;
    this.remotePlayers = new Map();
    this.setupListeners();
  }

  setupListeners() {
    this.socket.on('joinSuccess', (data) => {
      this.roomId = data.roomId;
      this.playerId = this.socket.id;
      this.scene.events.emit('gameStarted', data.players);
    });

    this.socket.on('joinFailed', (data) => {
      console.error('Join failed:', data.reason);
    });

    this.socket.on('playerJoined', (data) => {
      this.remotePlayers.set(data.player.id, data.player);
      this.scene.events.emit('remotePlayerJoined', data.player);
    });

    this.socket.on('playerUpdated', (data) => {
      if (data.playerId !== this.playerId) {
        const player = this.remotePlayers.get(data.playerId);
        if (player) {
          player.position = data.position;
          player.velocity = data.velocity;
          player.animation = data.animation;
          player.isFacingRight = data.isFacingRight;
          this.scene.events.emit('remotePlayerUpdated', { playerId: data.playerId, data });
        }
      }
    });

    this.socket.on('playerLeft', (data) => {
      this.remotePlayers.delete(data.playerId);
      this.scene.events.emit('remotePlayerLeft', data.playerId);
    });

    this.socket.on('weaponFired', (data) => {
      if (data.playerId !== this.playerId) {
        this.scene.events.emit('remoteWeaponFired', data);
      }
    });
  }

  joinGame(name, character) {
    this.socket.emit('joinGame', { name, character, roomId: 'room1' });
  }

  sendPlayerInput(velocity, action) {
    this.socket.emit('playerInput', { velocity, action });
  }

  sendWeaponFired(weaponIndex, direction) {
    this.socket.emit('fireWeapon', { weaponIndex, direction });
  }
}
