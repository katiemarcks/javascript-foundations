class Craft {
  constructor({ type, materials }) {
    this.name = type;
    this.materials = materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`;
  }

  calculateProjectTotal() {
    let totalCost = 0;
    for (let i = 0; i < this.materials.length; i++) {
      const element = this.materials[i];
      totalCost += element.price * element.amount;
    }
    return totalCost;
  }
}

module.exports = Craft;
