class Sphinx {
  constructor(name = null) {
    this.riddles = [];
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
      }
    }
  }
}

module.exports = Sphinx;
