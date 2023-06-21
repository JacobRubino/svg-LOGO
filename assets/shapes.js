//const shape = class {}
class Shape{
  constructor() {
      this.color = '';
  }
  setColor(color) {
      this.color = (color);
  }
  resize(scale) {

  }
}
class Circle extends Shape{
  constructor() {
    super();
    this.radius = 100;
  }
  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
};

