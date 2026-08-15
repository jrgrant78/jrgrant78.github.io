// client/js/systems/InputManager.js
class InputManager {
  constructor(scene) {
    this.scene = scene;
    this.keys = scene.input.keyboard.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
      SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE,
      SHIFT: Phaser.Input.Keyboard.KeyCodes.SHIFT,
      E: Phaser.Input.Keyboard.KeyCodes.E,
      Q: Phaser.Input.Keyboard.KeyCodes.Q,
      ONE: Phaser.Input.Keyboard.KeyCodes.ONE,
      TWO: Phaser.Input.Keyboard.KeyCodes.TWO
    });

    this.mouseInput = {
      x: 0,
      y: 0,
      isPressed: false
    };

    scene.input.on('pointermove', (pointer) => {
      this.mouseInput.x = pointer.worldX;
      this.mouseInput.y = pointer.worldY;
    });

    scene.input.on('pointerdown', () => {
      this.mouseInput.isPressed = true;
    });

    scene.input.on('pointerup', () => {
      this.mouseInput.isPressed = false;
    });
  }

  getMovementInput() {
    const velocity = { x: 0, y: 0 };
    
    if (this.keys.A.isDown) velocity.x -= GAME_CONFIG.PLAYER_SPEED;
    if (this.keys.D.isDown) velocity.x += GAME_CONFIG.PLAYER_SPEED;
    
    return velocity;
  }

  isJumping() {
    return Phaser.Input.Keyboard.JustDown(this.keys.SPACE);
  }

  isSliding() {
    return this.keys.SHIFT.isDown;
  }

  getWeaponSwitch() {
    if (Phaser.Input.Keyboard.JustDown(this.keys.ONE)) return 0;
    if (Phaser.Input.Keyboard.JustDown(this.keys.TWO)) return 1;
    return -1;
  }

  getAimDirection(playerX, playerY) {
    const dx = this.mouseInput.x - playerX;
    const dy = this.mouseInput.y - playerY;
    return Phaser.Math.Angle.Between(playerX, playerY, this.mouseInput.x, this.mouseInput.y);
  }
}
