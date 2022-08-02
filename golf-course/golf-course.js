class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    let groupSize = group.length;
    if (groupSize <= this.openings) {
      this.openings = this.openings - groupSize;
      for (let i = 0; i < group.length; i++) {
        const golfer = group[i];
        this.currentlyPlaying.unshift(golfer.name);
      }
      return "You're checked in. Have fun!";
    } else {
      return "Sorry, we are currently booked! Please come back later.";
    }
  }
}

module.exports = GolfCourse;
