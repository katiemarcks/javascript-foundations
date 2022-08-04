class Skater {
  constructor({ name, skill, tricks, cash }) {
    this.name = name;
    this.skill = skill;
    this.tricks = tricks;
    this.money = cash;
    this.frustration = 0;
  }

  practice(trick) {
    if (this.tricks[trick] === false) {
      this.frustration = this.frustration + 1;
    }
  }
}

module.exports = Skater;
