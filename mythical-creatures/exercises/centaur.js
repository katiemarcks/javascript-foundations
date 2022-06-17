class Centaur {
  constructor({ name, type }) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.shootAndRunCount = 0;
  }

  shootBow() {
    this.shootAndRunCount++;
    if (this.shootAndRunCount >= 3) {
      this.cranky = true;
      return "NO!";
    } else {
      return "Twang!!!";
    }
  }

  run() {
    this.shootAndRunCount++;
    if (this.shootAndRunCount >= 3) {
      this.cranky = true;
      return "NO!";
    } else {
      return "Clop clop clop clop!!!";
    }
  }
}

module.exports = Centaur;
