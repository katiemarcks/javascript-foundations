var Part = require("./part");
var Ship = require("./ship");

class Shop {
  constructor({ name }) {
    this.name = name;
    this.inventory = {};
  }

  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }
  }

  outfitShip(ship, item) {
    let captain = ship.captain;
    let itemObject = this.inventory[item];
    if (captain === undefined) {
      return `cannot outfit a ship without a captain`;
    } else if (captain.credits < itemObject.value) {
      let creditsNeeded = itemObject.value - captain.credits;
      return `you require ${creditsNeeded} more credits to make this purchase`;
    } else {
      captain.credits = captain.credits - itemObject.value;
      ship.parts[itemObject.type] = itemObject;
      delete this.inventory[item];
      return `${item} added to ship`;
    }
  }
}

module.exports = Shop;
