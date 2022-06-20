class Centaur {
  constructor({ name, type }) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.shootAndRunCount = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.shootAndRunCount++;
    if (this.shootAndRunCount >= 3 || this.layingDown) {
      this.cranky = true;
      return "NO!";
    } else {
      return "Twang!!!";
    }
  }

  run() {
    this.shootAndRunCount++;
    if (this.shootAndRunCount >= 3 || this.layingDown) {
      this.cranky = true;
      return "NO!";
    } else {
      return "Clop clop clop clop!!!";
    }
  }

  sleep() {
    if (this.standing === true) {
      return "NO!";
    } else {
      this.cranky = false;
      this.shootAndRunCount = 0;
      return "ZZZZ";
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;
