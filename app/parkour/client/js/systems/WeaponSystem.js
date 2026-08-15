// client/js/systems/WeaponSystem.js
class WeaponSystem {
  constructor(scene) {
    this.scene = scene;
    this.projectiles = scene.add.group();
    this.meleeHitboxes = scene.add.group();
  }

  fireRangedWeapon(weapon, position, angle, playerId) {
    if (weapon.ammo <= 0) return null;

    const speed = 400;
    const projectile = {
      x: position.x,
      y: position.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      damage: weapon.damage,
      playerId: playerId,
      lifetime: 5000
    };

    this.projectiles.add(
      this.scene.add.rectangle(
        projectile.x,
        projectile.y,
        6,
        3,
        0xffff00
      )
    );

    weapon.ammo--;
    return projectile;
  }

  createMeleeAttack(weapon, position, angle, playerId) {
    const hitbox = {
      x: position.x + Math.cos(angle) * 30,
      y: position.y + Math.sin(angle) * 30,
      radius: 25,
      damage: weapon.damage,
      playerId: playerId,
      lifetime: 200,
      elapsed: 0
    };

    return hitbox;
  }

  updateProjectiles(delta, enemies) {
    this.projectiles.children.entries.forEach((proj, idx) => {
      if (!proj.data) {
        proj.data = this.projectiles.children.entries[idx].projectileData;
      }

      if (proj.data) {
        proj.data.x += proj.data.vx * delta / 1000;
        proj.data.y += proj.data.vy * delta / 1000;
        proj.data.lifetime -= delta;

        proj.x = proj.data.x;
        proj.y = proj.data.y;

        if (proj.data.lifetime <= 0) {
          proj.destroy();
        }
      }
    });
  }
}
