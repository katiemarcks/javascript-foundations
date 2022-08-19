const Being = require("./being");

class Ship {
  constructor({
    name,
    type,
    maxCrew,
    odometer = 0,
    fuelCapacity = 10,
    captain,
  }) {
    this.name = name;
    this.type = type;
    this.maxCrew = maxCrew;
    this.odometer = odometer;
    this.fuelCapacity = fuelCapacity;
    this.fuel = 0;
    this.captain = captain;
    this.crew = [];
  }

  addCrew(crew) {
    for (let i = 0; i < crew.length; i++) {
      const element = crew[i];
      if (this.crew.length < this.maxCrew) {
        this.crew.push(element);
      }
    }
  }
}

module.exports = Ship;
