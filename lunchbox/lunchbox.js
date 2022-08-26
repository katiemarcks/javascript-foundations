class LunchBox {
  constructor({ owner, madeOf, shape, color }) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.snacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    this.healthySnacks = [];
    for (let i = 0; i < this.snacks.length; i++) {
      const element = this.snacks[i];
      if (element.type.toLowerCase().includes("fruit")) {
        this.healthySnacks.push(element.type);
      }
    }
    return this.healthySnacks;
  }
}

module.exports = LunchBox;
