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
}

module.exports = SkatePark;
