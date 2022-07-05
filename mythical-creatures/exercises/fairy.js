class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ["Iris"] };
    this.disposition = "Good natured";
    this.humanWards = [];
    this.stolenInfantsCount = 0;
  }

  receiveBelief() {
    this.dust = this.dust + 1;
  }

  believe() {
    this.dust = this.dust + 10;
  }

  makeDresses(flowers) {
    for (let i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
    }
  }

  becomeProvoked() {
    this.disposition = "Vengeful";
  }

  replaceInfant(infant) {
    if (this.disposition === "Vengeful") {
      infant.disposition = "Malicious";
      this.humanWards.push(infant);
      this.stolenInfantsCount++;
      if (this.stolenInfantsCount === 3) {
        this.disposition = "Good natured";
      }
    } else {
      return infant;
    }
  }
}

module.exports = Fairy;
