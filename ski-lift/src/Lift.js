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

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = "down";
    } else if (this.skiers.length < this.limit) {
      let skiersNeeded = this.limit - this.skiers.length;
      if (skiersNeeded === 1) {
        return `We still need 1 more skier!`;
      } else if (skiersNeeded > 1) {
        return `We still need ${skiersNeeded} more skiers!`;
      }
    }
  }
}

module.exports = Lift;
