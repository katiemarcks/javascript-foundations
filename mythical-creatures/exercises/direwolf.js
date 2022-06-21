var Stark = require("./stark");

class Direwolf {
  constructor(name, home = "Beyond the Wall", size = "Massive") {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
  }

  protect(stark) {
    this.starksToProtect.push(stark);
  }
}

module.exports = Direwolf;
