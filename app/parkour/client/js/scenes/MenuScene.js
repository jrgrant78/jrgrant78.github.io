// client/js/scenes/MenuScene.js
class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    this.add.text(
      this.cameras.main.width / 2,
      100,
      'PARKOUR MULTIPLAYER',
      { fontSize: '48px', fill: '#fff', align: 'center' }
    ).setOrigin(0.5);

    // Character selection
    this.add.text(100, 180, 'Select Character:', { fontSize: '24px', fill: '#fff' });

    let yOffset = 220;
    let characterButtons = [];

    CHARACTERS.forEach((char, idx) => {
      const button = this.add.rectangle(150 + (idx % 5) * 180, yOffset + (Math.floor(idx / 5) * 80), 160, 60, 0x444444)
        .setInteractive()
        .on('pointerover', () => button.setFillStyle(0x666666))
        .on('pointerout', () => button.setFillStyle(0x444444))
        .on('pointerdown', () => this.selectCharacter(char.id));

      this.add.text(button.x, button.y, char.name, { fontSize: '14px', fill: '#fff' })
        .setOrigin(0.5)
        .setDepth(1);

      characterButtons.push(button);
    });

    // Play button
    const playButton = this.add.rectangle(
      this.cameras.main.width / 2,
      550,
      200,
      60,
      0x00aa00
    ).setInteractive();

    this.add.text(
      this.cameras.main.width / 2,
      550,
      'PLAY',
      { fontSize: '24px', fill: '#fff' }
    ).setOrigin(0.5).setDepth(1);

    playButton.on('pointerover', () => playButton.setFillStyle(0x00ff00));
    playButton.on('pointerout', () => playButton.setFillStyle(0x00aa00));
    playButton.on('pointerdown', () => this.startGame());

    this.selectedCharacter = 'ninja';
  }

  selectCharacter(characterId) {
    this.selectedCharacter = characterId;
  }

  startGame() {
    this.scene.start('Game', { character: this.selectedCharacter });
  }
}
