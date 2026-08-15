// client/js/utils/constants.js
const CHARACTERS = [
  { id: 'ninja', name: 'Ninja', color: '#000000' },
  { id: 'soldier', name: 'Soldier', color: '#4a4a4a' },
  { id: 'assassin', name: 'Assassin', color: '#8b0000' },
  { id: 'athlete', name: 'Athlete', color: '#ff8c00' },
  { id: 'cyborg', name: 'Cyborg', color: '#00ff00' },
  { id: 'acrobat', name: 'Acrobat', color: '#ff1493' },
  { id: 'knight', name: 'Knight', color: '#c0c0c0' },
  { id: 'rogue', name: 'Rogue', color: '#8b4513' },
  { id: 'dancer', name: 'Dancer', color: '#ff69b4' },
  { id: 'ghost', name: 'Ghost', color: '#e0e0e0' }
];

const RANGED_WEAPONS = [
  { id: 'handgun', name: 'Handgun', damage: 25, fireRate: 10, maxAmmo: 30 },
  { id: 'machinegun', name: 'Machine Gun', damage: 15, fireRate: 2, maxAmmo: 120 },
  { id: 'rocketlauncher', name: 'Rocket Launcher', damage: 100, fireRate: 30, maxAmmo: 10 },
  { id: 'railgun', name: 'Rail Gun', damage: 80, fireRate: 20, maxAmmo: 15 },
  { id: 'minigun', name: 'Minigun', damage: 12, fireRate: 1, maxAmmo: 200 },
  { id: 'laserblaster', name: 'Laser Blaster', damage: 40, fireRate: 5, maxAmmo: 100 }
];

const MELEE_WEAPONS = [
  { id: 'knife', name: 'Knife', damage: 30, attackSpeed: 5, durability: 100 },
  { id: 'machete', name: 'Machete', damage: 40, attackSpeed: 8, durability: 150 },
  { id: 'baseballbat', name: 'Baseball Bat', damage: 50, attackSpeed: 12, durability: 200 },
  { id: 'chainsaw', name: 'Chainsaw', damage: 60, attackSpeed: 3, durability: 100 },
  { id: 'mace', name: 'Mace', damage: 55, attackSpeed: 15, durability: 300 },
  { id: 'lance', name: 'Lance', damage: 45, attackSpeed: 10, durability: 250 },
  { id: 'katana', name: 'Katana', damage: 50, attackSpeed: 6, durability: 200 },
  { id: 'scimiter', name: 'Scimiter', damage: 48, attackSpeed: 7, durability: 180 },
  { id: 'lightsaber', name: 'Lightsaber', damage: 70, attackSpeed: 4, durability: 500 },
  { id: 'fryingpan', name: 'Frying Pan', damage: 35, attackSpeed: 8, durability: 300 }
];

const GAME_CONFIG = {
  PLAYER_SPEED: 200,
  JUMP_FORCE: 400,
  GRAVITY: 1000,
  WALL_SLIDE_DECELERATION: 0.3,
  WORLD_WIDTH: 4000,
  WORLD_HEIGHT: 2000,
  VIEWPORT_WIDTH: 1280,
  VIEWPORT_HEIGHT: 720
};
