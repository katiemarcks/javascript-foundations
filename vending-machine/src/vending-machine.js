class VendingMachine {
  constructor({ id, isBroken }) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (!this.snacks.some((e) => e.name === snack["name"])) {
      this.snacks.push(snack);
    } else {
      return "Sorry, that snack is already stocked! Try adding a different snack.";
    }
  }

  purchaseSnack(snackName, moneyPaid) {
    let index = this.snacks.findIndex((e) => e.name === snackName);
    let correctItem = this.snacks[index];
    if (correctItem.itemsInStock > 0) {
      correctItem.itemsInStock = correctItem.itemsInStock - 1;
      let change = moneyPaid - correctItem.price;
      return `Success! Here is $${change} back!`;
    } else {
      return `Sorry, no items in stock. Try another item.`;
    }

    // if (!this.snacks.some((e) => e.name === snackName)) {
    //   let index = this.snacks.findIndex((e) => e.name === snackName);
    //   this.snacks.splice(index, 1);
    // }
  }
}

module.exports = VendingMachine;
