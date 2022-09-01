class Wagon {
  constructor({
    name,
    wheels = [],
    axles = [],
    oxen = [],
    yokes = [],
    food,
    ammunition,
    clothes,
    settlers = [],
  }) {
    this.title = name;
    this.wheels = wheels;
    this.axles = axles;
    this.oxen = oxen;
    this.yokes = yokes;
    this.food = food;
    this.ammunition = ammunition;
    this.clothes = clothes;
    this.settlers = settlers;
  }

  addPart(part) {
    if (part.type === "wheel") {
      this.wheels.push(part);
    } else if (part.type === "axle") {
      this.axles.push(part);
    } else if (part.type === "ox") {
      this.oxen.push(part);
    } else if (part.type === "yoke") {
      this.yokes.push(part);
    }
  }

  canTravel() {
    if (
      this.wheels.length === 4 &&
      this.axles.length === 2 &&
      this.oxen.length >= 2 &&
      this.yokes.length >= 1 &&
      this.settlers.length === 1
    ) {
      for (let i = 0; i < this.wheels.length; i++) {
        const element = this.wheels[i];
        if (element.broken === true) {
          return false;
        } else {
          for (let i = 0; i < this.axles.length; i++) {
            const element = this.axles[i];
            if (element.broken === true) {
              return false;
            } else {
              for (let i = 0; i < this.oxen.length; i++) {
                const element = this.oxen[i];
                if (element.broken === true) {
                  return false;
                } else {
                  if (this.oxen.length / this.yokes.length !== 2) {
                    return false;
                  } else {
                    if (
                      this.settlers.some((element) => element.status !== "dead")
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      return false;
    }
  }
}

module.exports = Wagon;
