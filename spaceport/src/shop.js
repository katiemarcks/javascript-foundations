var Part = require("./part");
var Being = require("./being");
var Ship = require("./ship");
var ShopTest = require("../test/shop-test");

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
    }
  }
}

module.exports = Shop;
