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
}

module.exports = Ship;
