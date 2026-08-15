// client/js/scenes/GameScene.js
class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create(data) {
    this.character = data.character;

    // Network setup
    this.networkManager = new NetworkManager(this);
    this.inputManager = new InputManager(this);
    this.weaponSystem = new WeaponSystem(this);

    // Physics world setup
    this.physics.world.setBounds(0, 0, GAME_CONFIG.WORLD_WIDTH, GAME_CONFIG.WORLD_HEIGHT);
    this.physics.world.setGravity(0, 500);

    // Level generation
    this.levelData = LevelGenerator.generateLevel(
      GAME_CONFIG.WORLD_WIDTH,
      GAME_CONFIG.WORLD_HEIGHT
    );

    // Create platforms
    this.platforms = this.physics.add.staticGroup();
    this.levelData.forEach(platform => {
      const rect = this.add.rectangle(
        platform.x,
        platform.y,
        platform.width,
        platform.height,
        platform.type === 'hazard' ? 0xff0000 : 0x8b7355
      );
      this.physics.add.existing(rect, true);
      this.platforms.add(rect);
    });

    // Local player setup
    this.player = new Player(this, 100, 100, this.character);
    this.remotePlayers = new Map();
    this.projectiles = [];

    // Camera follow
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, GAME_CONFIG.WORLD_WIDTH, GAME_CONFIG.WORLD_HEIGHT);

    // Collisions
    this.physics.add.collider(this.player, this.platforms, () => {
      this.player.isGrounded = true;
    });

    // Network events
    this.events.on('gameStarted', (players) => {
      console.log('Game started with players:', players);
      players.forEach(p => {
        if (p.id !== this.networkManager.playerId) {
          this.createRemotePlayer(p);
        }
      });

      this.networkManager.joinGame('Player', this.character);
    });

    this.events.on('remotePlayerJoined', (player) => {
      this.createRemotePlayer(player);
    });

    this.events.on('remotePlayerUpdated', ({ playerId, data }) => {
      const remotePlayer = this.remotePlayers.get(playerId);
      if (remotePlayer) {
        remotePlayer.x = data.position.x;
        remotePlayer.y = data.position.y;
        remotePlayer.body.setVelocity(data.velocity.x, data.velocity.y);
        remotePlayer.scaleX = data.isFacingRight ? 1 : -1;
      }
    });

    this.events.on('remotePlayerLeft', (playerId) => {
      const remotePlayer = this.remotePlayers.get(playerId);
      if (remotePlayer) {
        remotePlayer.destroy();
        this.remotePlayers.delete(playerId);
      }
    });

    this.events.on('remoteWeaponFired', (data) => {
      this.createProjectile(data);
    });

    this.events.on('weaponFired', ({ weaponIndex, angle }) => {
      this.networkManager.sendWeaponFired(weaponIndex, angle);
    });

    // UI setup
    this.createUI();
  }

  createRemotePlayer(playerData) {
    const remotePlayer = new Player(this, playerData.position.x, playerData.position.y, playerData.character);
    remotePlayer.setAlpha(0.8);
    this.remotePlayers.set(playerData.id, remotePlayer);
  }

  createProjectile(data) {
    const proj = this.add.rectangle(
      data.position.x,
      data.position.y,
      6,
      3,
      0xffff00
    );
    this.physics.add.existing(proj);
    proj.body.setVelocity(
      Math.cos(data.direction) * 400,
      Math.sin(data.direction) * 400
    );

    this.projectiles.push({
      sprite: proj,
      damage: data.weapon.damage,
      lifetime: 5000,
      playerId: data.playerId
    });
  }

  createUI() {
    this.healthText = this.add.text(16, 16, '', { fontSize: '20px', fill: '#fff' })
      .setScrollFactor(0)
      .setDepth(100);

    this.weaponText = this.add.text(16, 50, '', { fontSize: '20px', fill: '#fff' })
      .setScrollFactor(0)
      .setDepth(100);

    this.ammoText = this.add.text(16, 84, '', { fontSize: '20px', fill: '#fff' })
      .setScrollFactor(0)
      .setDepth(100);
  }

  update(time, delta) {
    if (!this.player || !this.player.active) return;

    // Update local player
    this.player.update(this.inputManager, delta);

    // Send player input to network
    this.networkManager.sendPlayerInput(
      { x: this.player.body.velocity.x, y: this.player.body.velocity.y },
      this.player.currentKey
    );

    // Update projectiles
    this.projectiles = this.projectiles.filter(proj => {
      proj.lifetime -= delta;
      proj.sprite.x += proj.sprite.body.velocity.x * delta / 1000;
      proj.sprite.y += proj.sprite.body.velocity.y * delta / 1000;

      if (proj.lifetime <= 0 || proj.sprite.y > GAME_CONFIG.WORLD_HEIGHT) {
        proj.sprite.destroy();
        return false;
      }
      return true;
    });

    // Update UI
    const weapon = this.player.weapons[this.player.currentWeaponIndex];
    this.healthText.setText(`Health: ${this.player.health}`);
    this.weaponText.setText(`Weapon: ${weapon.name}`);
    if (weapon.ammo) {
      this.ammoText.setText(`Ammo: ${weapon.ammo}`);
    } else {
      this.ammoText.setText(`Durability: ${weapon.durability}`);
    }
  }
}
