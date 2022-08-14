class Part {
  constructor({ name = undefined, type, value }) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.broken = false;
  }

  checkForValidity() {
    if (this.name === undefined) {
      this.isValid = false;
      return "This part needs a name!";
    } else if (this.type === undefined) {
      this.isValid = false;
      return "This part needs a type!";
    } else if (this.value === undefined) {
      this.isValid = false;
      return "This part needs a value!";
    } else {
      this.isValid = true;
    }
  }
}

module.exports = Part;
