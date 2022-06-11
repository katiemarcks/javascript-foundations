class Hobbit {
  constructor({ name }) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
  }

  celebrateBirthday() {
    this.age++;
    if (this.age > 32 && this.age < 101) {
      this.adult = true;
    } else if (this.age >= 101) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;
