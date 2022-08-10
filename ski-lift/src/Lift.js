var Skier = require("./Skier");

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = "up";
  }

  admitSkier(name, hasLiftTicket) {
    let skier = new Skier(name, hasLiftTicket);
    if (this.skiers.length <= this.limit - 1 && skier.hasLiftTicket) {
      this.skiers.push(skier);
    } else if (!skier.hasLiftTicket) {
      return `Sorry, ${skier.name}. You need a lift ticket!`;
    } else {
      return `Sorry, ${skier.name}. Please wait for the next lift!`;
    }
  }
}

module.exports = Lift;
