class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    if (
      this.type === "ammunition" ||
      this.type === "clothes" ||
      this.type === "food"
    ) {
      return `Great, we'll need lots of ${this.type}!`;
    } else {
      let invalidMessage = `I don't think a ${this.type} will help us.`;
      this.type = null;
      return invalidMessage;
    }
  }
}

module.exports = Gear;
