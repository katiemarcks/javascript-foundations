class Ogre {
  constructor({ name, abode = "Swamp" }) {
    this.name = name;
    this.home = abode;
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter = human.encounterCounter + 1;
    if (human.encounterCounter === 3) {
      this.swings = this.swings + 1;
    }
  }

  swingAt(human) {
    this.swings = this.swings + 1;
  }
}

module.exports = Ogre;
