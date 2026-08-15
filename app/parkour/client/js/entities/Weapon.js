// client/js/entities/Weapon.js
class Weapon extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, weaponData) {
    super(scene, x, y, 'weapon');
    
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.weaponData = weaponData;
    this.setDisplaySize(16, 16);
    this.body.setBounce(0.5);
    this.body.setCollideWorldBounds(true);
    this.body.setDrag(0.95);
  }

  update() {
    this.rotation += 0.05;
  }
}
