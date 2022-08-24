var Ship = require("./ship");

class Planet {
  constructor({ name, shop, coordinates }) {
    this.name = name;
    this.shop = shop;
    this.coordinates = coordinates;
  }

  landShip(ship) {
    this.currentShip = ship;
  }

  calculateDistance(otherPlanet) {
    let distanceBetween = Math.sqrt(
      (otherPlanet.coordinates.x - this.coordinates.x) ** 2 +
        (otherPlanet.coordinates.y - this.coordinates.y) ** 2 +
        (otherPlanet.coordinates.z - this.coordinates.z) ** 2
    );
    return distanceBetween;
  }

  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }

  giveClearance(otherPlanet) {
    if (this.currentShip.fuel === 0) {
      return `Clearance denied: Cannot fly without fuel`;
    } else {
      this.currentShip.fuel = 0;
      otherPlanet.currentShip = this.currentShip;
      this.currentShip = undefined;
      return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`;
    }
  }
}

module.exports = Planet;
