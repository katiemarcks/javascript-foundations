var Snowman = require("./Snowman");

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      carrots: 0,
      coal: 0,
      snowballs: 0,
      buttons: 0,
    };
  }

  gatherMaterials(material, amount) {
    this.materials[material] = this.materials[material] + amount;
  }

  buildASnowman() {
    this.snowman = new Snowman(this.materials);
    return this.snowman;
  }

  placeMagicHat() {
    if (this.snowman.magicHat) {
      return `Woah, this snowman is coming to life!`;
    } else {
      return `I guess I didn't build it correctly.`;
    }
  }
}

module.exports = Human;
