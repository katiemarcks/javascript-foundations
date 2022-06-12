class Pirate {
  constructor(name, job = "scallywag") {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
    this.robbedShipsCount = 0;
    this.cursed = false;
  }

  robShip() {
    this.robbedShipsCount++;
    if (this.robbedShipsCount > 5) {
      this.cursed = true;
      return "ARG! I've been cursed!";
    } else {
      this.booty = this.booty + 100;
      return "YAARRR!";
    }
  }
}

module.exports = Pirate;
