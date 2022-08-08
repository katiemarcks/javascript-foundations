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
}

module.exports = VendingMachine;
