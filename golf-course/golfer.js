class Golfer {
  constructor({ name, handicap }) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    let averageScore = this.handicap + par;
    return `I usually shoot a ${averageScore} on average.`;
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration = this.frustration + 500;
    } else if (golfCourse.difficulty === "moderate") {
      this.frustration = this.frustration + 100;
    }
  }

  hitTheRange() {
    this.confidence = this.confidence + 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features.join(" and ")} on this course!`;
  }
}

module.exports = Golfer;
