// client/js/scenes/PreloadScene.js
class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('background', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');
  }

  create() {
    // Create simple graphics for player
    const graphics = this.make.graphics({ x: 0, y: 0, add: false });
    graphics.fillStyle(0xff0000, 1);
    graphics.fillRect(0, 0, 32, 48);
    graphics.generateTexture('player', 32, 48);
    graphics.destroy();

    // Create weapon graphic
    const weaponGraphics = this.make.graphics({ x: 0, y: 0, add: false });
    weaponGraphics.fillStyle(0xffff00, 1);
    weaponGraphics.fillRect(0, 0, 16, 16);
    weaponGraphics.generateTexture('weapon', 16, 16);
    weaponGraphics.destroy();

    // Create platform graphic
    const platformGraphics = this.make.graphics({ x: 0, y: 0, add: false });
    platformGraphics.fillStyle(0x8b7355, 1);
    platformGraphics.fillRect(0, 0, 100, 20);
    platformGraphics.generateTexture('platform', 100, 20);
    platformGraphics.destroy();

    this.scene.start('Menu');
  }
}
