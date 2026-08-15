// client/js/main.js
const config = {
  type: Phaser.AUTO,
  width: GAME_CONFIG.VIEWPORT_WIDTH,
  height: GAME_CONFIG.VIEWPORT_HEIGHT,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: GAME_CONFIG.GRAVITY },
      debug: false
    }
  },
  scene: [PreloadScene, MenuScene, GameScene],
  render: {
    pixelArt: true,
    antialias: false
  }
};

const game = new Phaser.Game(config);
