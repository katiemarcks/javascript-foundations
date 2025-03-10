class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.ate = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.ate++;
    if (this.ate >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
