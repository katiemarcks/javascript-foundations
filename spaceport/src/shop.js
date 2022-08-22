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
}

module.exports = Shop;
