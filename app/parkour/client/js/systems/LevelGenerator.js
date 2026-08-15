// client/js/systems/LevelGenerator.js
class LevelGenerator {
  static generateLevel(width, height, seed = 42) {
    const platforms = [];
    const random = new SeededRandom(seed);
    
    // Base ground
    platforms.push({
      x: 0,
      y: height - 50,
      width: width,
      height: 50,
      type: 'platform'
    });

    // Generate floating platforms
    for (let i = 0; i < 50; i++) {
      const x = random.next() * (width - 200);
      const y = random.next() * (height - 300) + 100;
      const w = random.range(80, 200);
      const h = 20;

      platforms.push({
        x,
        y,
        width: w,
        height: h,
        type: 'platform'
      });
    }

    // Walls for wall jumping
    for (let i = 0; i < 15; i++) {
      const x = random.next() * width;
      const y = random.range(200, height - 300);

      platforms.push({
        x,
        y,
        width: 30,
        height: random.range(150, 300),
        type: 'wall'
      });
    }

    // Hazards
    for (let i = 0; i < 10; i++) {
      const x = random.next() * width;
      const y = random.next() * height;

      platforms.push({
        x,
        y,
        width: random.range(60, 120),
        height: random.range(40, 80),
        type: 'hazard',
        damage: 10
      });
    }

    return platforms;
  }
}

class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }

  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }
}
