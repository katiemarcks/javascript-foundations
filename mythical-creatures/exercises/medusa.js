var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    if (this.statues.length <= 2) {
      this.statues.push(new Statue(victim.name));
    } else {
      let freedStatue = this.statues.shift();
      this.statues.push(new Statue(victim.name));
      return (freedStatue = new Person(freedStatue.name));
    }
  }
}

module.exports = Medusa;
