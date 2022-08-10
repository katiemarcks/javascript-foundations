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
    if (this.skiers.length <= this.limit - 1) {
      this.skiers.push(skier);
    } else {
      return `Sorry, ${skier.name}. Please wait for the next lift!`;
    }
  }
}

module.exports = Lift;
