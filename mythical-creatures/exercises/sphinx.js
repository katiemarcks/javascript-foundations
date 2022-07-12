class Sphinx {
  constructor(name = null) {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for (let i = 0; i < this.riddles.length; i++) {
      const element = this.riddles[i];
      if (element.answer === answer) {
        let index = this.riddles.indexOf(element);
        this.riddles.splice(index, 1);
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
        } else {
          return "That wasn't that hard, I bet you don't get the next one";
        }
      }
    }
    if (!this.riddles.some((element) => element.answer === answer)) {
      this.heroesEaten = this.heroesEaten + 1;
    }
  }
}

module.exports = Sphinx;
