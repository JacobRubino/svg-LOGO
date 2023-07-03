const { Triangle, Circle, Square } = require("../lib/shapes");

describe("Triangle", () => {
  test("should create a triangle", () => {
    const shape = new Triangle();
    shape.setColor("Orange");
    shape.setTextColor("Red");
    shape.setText("ABC");

    const testShape = shape.render();
    const sampleShape = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,20 240,180 60,180" fill="Orange" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="Red">ABC</text>
      </svg>
    `;

    expect(testShape).toEqual(sampleShape);
  });
});

describe("Circle", () => {
  test("should create a circle", () => {
    const shape = new Circle();
    shape.setColor("Green");
    shape.setTextColor("Yellow");
    shape.setText("DEF");

    const testShape = shape.render();
    const sampleShape = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="80" fill="Green" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="Yellow">DEF</text>
      </svg>
    `;

    expect(testShape).toEqual(sampleShape);
  });
});

describe("Square", () => {
  test("should create a square", () => {
    const shape = new Square();
    shape.setColor("Purple");
    shape.setTextColor("Blue");
    shape.setText("GHI");

    const testShape = shape.render();
    const sampleShape = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="Purple" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="Blue">GHI</text>
      </svg>
    `;

    expect(testShape).toEqual(sampleShape);
  });
});