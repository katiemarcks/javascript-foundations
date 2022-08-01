class Roadrace {
  constructor({ title, city }) {
    this.name = title;
    this.location = city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    for (let i = 0; i < this.participants.length; i++) {
      const participant = this.participants[i];
      participant.runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
