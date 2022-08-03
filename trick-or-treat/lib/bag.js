class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.candies.push(candy);
    this.count = this.candies.length;
  }

  contains(type) {
    if (this.candies.some((e) => e.type === type)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Bag;
