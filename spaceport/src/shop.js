var Part = require("./part");

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
    if (ship.captain === undefined) {
      return `cannot outfit a ship without a captain`;
    } else if (ship.captain.credits < item.value) {
      let creditsNeeded = item.value - ship.captain.credits;
      return `you require ${creditsNeeded} more credits to make this purchase`;
    }
  }
}

module.exports = Shop;
