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
    this.skiers.push(skier);
  }
}

module.exports = Lift;
