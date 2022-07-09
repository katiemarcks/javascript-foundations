class Ogre {
  constructor({ name, abode = "Swamp" }) {
    this.name = name;
    this.home = abode;
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter = human.encounterCounter + 1;
    if (human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swings = this.swings + 1;
      if (this.swings === 2) {
        human.knockedOut = true;
      }
    }
  }

  swingAt(human) {
    this.swings = this.swings + 1;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
