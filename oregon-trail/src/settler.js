class Settler {
  constructor({ name, age, nationality = "unknown" }) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.status = "healthy";
    this.ailments = [];
  }

  experienceDistress(event) {
    if (this.status !== "dead") {
      this.ailments.push(event);
    }

    if (this.ailments.length <= 1) {
      this.status = "fair";
    } else if (this.ailments.length <= 2) {
      this.status = "poor";
    } else if (this.ailments.length <= 3) {
      this.status = "dead";
    }
  }

  heal() {
    if (this.status !== "dead") {
      this.status = "healthy";
      this.ailments = [];
    } else {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    }
  }
}

module.exports = Settler;
