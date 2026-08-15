// client/js/entities/Player.js
class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, character) {
    super(scene, x, y, 'player');
    
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.character = character;
    this.health = 100;
    this.maxHealth = 100;
    this.isGrounded = false;
    this.isWallSliding = false;
    this.isFacingRight = true;
    this.canJump = true;
    this.canWallJump = true;
    this.wallJumpCooldown = 0;

    this.currentWeaponIndex = 0;
    this.weapons = [
      { ...RANGED_WEAPONS[0], ammo: 30 },
      { ...MELEE_WEAPONS[0], durability: 100 }
    ];

    this.body.setCollideWorldBounds(true);
    this.body.setBounce(0.1, 0);
    this.body.setDrag(0.9);
    this.body.setGravityY(GAME_CONFIG.GRAVITY);

    this.setDisplaySize(32, 48);
    this.setTint(CHARACTERS.find(c => c.id === character).color.replace('#', '0x'));

    // Animation setup
    if (!scene.anims.exists('idle')) {
      scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1
      });
    }

    if (!scene.anims.exists('run')) {
      scene.anims.create({
        key: 'run',
        frames: scene.anims.generateFrameNumbers('player', { start: 4, end: 9 }),
        frameRate: 12,
        repeat: -1
      });
    }

    this.play('idle');
  }

  update(inputManager, delta) {
    const movement = inputManager.getMovementInput();
    
    // Movement
    this.body.setVelocityX(movement.x);
    
    if (movement.x > 0) this.isFacingRight = true;
    else if (movement.x < 0) this.isFacingRight = false;

    if (movement.x !== 0) {
      this.scaleX = this.isFacingRight ? 1 : -1;
      if (!this.isPlaying || this.currentKey !== 'run') {
        this.play('run');
      }
    } else {
      if (!this.isPlaying || this.currentKey !== 'idle') {
        this.play('idle');
      }
    }

    // Jumping
    if (inputManager.isJumping() && (this.isGrounded || this.canWallJump)) {
      this.body.setVelocityY(-GAME_CONFIG.JUMP_FORCE);
      this.isGrounded = false;
      this.canWallJump = false;
      this.wallJumpCooldown = 200;
    }

    // Wall slide
    if (this.isWallSliding) {
      this.body.setVelocityY(Math.min(this.body.velocity.y, 50));
    }

    // Ground check (simple collision)
    this.isGrounded = this.body.touching.down;

    // Weapon fire
    if (inputManager.mouseInput.isPressed) {
      this.fireWeapon(inputManager);
    }

    // Weapon switch
    const weaponSwitch = inputManager.getWeaponSwitch();
    if (weaponSwitch !== -1) {
      this.currentWeaponIndex = weaponSwitch;
    }

    this.wallJumpCooldown -= delta;
  }

  fireWeapon(inputManager) {
    const weapon = this.weapons[this.currentWeaponIndex];
    if (!weapon) return;

    const angle = inputManager.getAimDirection(this.x, this.y);
    
    if (weapon.type === 'ranged' && weapon.ammo > 0) {
      weapon.ammo--;
      // Emit to network
      this.scene.events.emit('weaponFired', {
        weaponIndex: this.currentWeaponIndex,
        angle: angle
      });
    }
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.destroy();
    }
  }
}
