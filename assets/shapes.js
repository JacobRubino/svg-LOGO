//const shape = class {}
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  resize(scale) {}
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 0,150 300,150" fill="${this.color}" />`;
  }
}
const Square = class extends Shape {
  render() {
    return `<rect x="150" y="150" width="150" height="150" fill="${this.color}" />`;
  }
};
module.exports = { Circle, Triangle, Square };
