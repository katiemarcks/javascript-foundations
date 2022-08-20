const Being = require("./being");
const Part = require("./part");

class Ship {
  constructor({
    name,
    type,
    maxCrew,
    odometer = 0,
    fuelCapacity = 10,
    captain,
    parts = {},
  }) {
    this.name = name;
    this.type = type;
    this.maxCrew = maxCrew;
    this.odometer = odometer;
    this.fuelCapacity = fuelCapacity;
    this.fuel = 0;
    this.captain = captain;
    this.crew = [];
    this.cargo = [];
    this.parts = parts;
    this.readyToFly = false;
  }

  addCrew(crew) {
    for (let i = 0; i < crew.length; i++) {
      const element = crew[i];
      if (this.crew.length < this.maxCrew && element instanceof Being) {
        this.crew.push(element);
      }
    }
  }

  loadCargo(partCargo) {
    if (partCargo instanceof Part) {
      this.cargo.push(partCargo);
    }
  }

  updatePart(newPart) {
    if (newPart.type in this.parts) {
      let difference = this.parts[newPart.type].value - newPart.value;
      this.parts[newPart.type] = newPart;
      return difference;
    } else {
      this.parts[newPart.type] = newPart;
    }
  }

  checkReadiness() {
    if (this.captain === undefined) {
      return `Cannot fly without a captain`;
    } else if (this.fuel === 0) {
      return `Cannot fly without fuel`;
    } else if (Object.keys(this.parts).length === 0) {
      return `Cannot fly without parts`;
    } else {
      this.readyToFly = true;
      return `Good to go!`;
    }
  }
}

module.exports = Ship;
