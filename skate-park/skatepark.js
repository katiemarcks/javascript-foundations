class SkatePark {
  constructor({ name, year, type, features, isPrivate = false, price = 0 }) {
    this.name = name;
    this.yearFounded = year;
    this.style = type;
    this.features = features;
    this.isPrivate = isPrivate;
    this.cost = price;
    this.occupants = [];
  }

  admit(skater) {
    if (this.isPrivate && skater.money >= this.cost) {
      this.occupants.push(skater);
      skater.money = skater.money - this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    } else if (this.isPrivate && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`;
    } else {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    }
  }
}

module.exports = SkatePark;
