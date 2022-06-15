class Magician {
  constructor({ name, assistant, clothing }) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    this.favoriteAccessory = clothing || "top hat";
  }

  performIncantation(string) {
    return `${string.toUpperCase()}!`;
  }
}

module.exports = Magician;
