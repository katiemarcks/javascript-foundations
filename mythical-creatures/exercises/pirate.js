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

  liftCurse() {
    if (this.cursed && this.booty >= 300) {
      this.booty = this.booty - 300;
      this.cursed = false;
      return "Your curse has been lifted!";
    } else if (!this.cursed) {
      return "You don't need to lift a curse!";
    }
  }
}

module.exports = Pirate;
