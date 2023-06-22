const fs = require('fs');
const { default: inquirer } = require('inquirer');
const { Triangle, Circle, Square } = require('./assets/shapes');
const { validateTextChoice } = require('./assets/validateTextChoice');
// const svg = require('svg') this is only for website use right? 
const userPrompts =[
  {
    type: 'input',
    name: 'text',
    message: 'What letters would you like dispalyed on your logo, up to 3?'
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color would you like your logo to be?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'what shape would you like on your logo?', 
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'What color would you like your logos text to be?'
  },
]

class renderLogo {
  constructor() {
    this.text = '';
    this.shapes = '';
  };
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.userShape}  ${this.userText}</svg>`
  };
  newText(text, color) {
    this.userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"> ${text}</text>`
  };
  newShape(shape) {
    this.userShape = shape.render();
  };
};

function init() {
  inquirer.prompt(userPrompts)
    .then((answers) => {
      const logo = new renderLogo();
      logo.newText(answers.text, answers['text-color']);
      logo.newShape(createShapeInstance(answers['what shape would you like on your logo?']));
      return logo.render();
    })
    .then((svgContent) => {
      const svgFile = 'logo.svg';
      return writeSVG(svgFile, svgContent);
    })
    .then(() => {
      console.log('Logo completed! Check out the output folder for the generated SVG file.');
    })
    .catch((error) => {
      console.log(error);
    });
}
function writeSVG(file, data) {
  return fs.writeFile(file, data);
}

function createShapeInstance(shapeName) {
  const shapeClasses = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
  };

  const ShapeClass = shapeClasses[shapeName.toLowerCase()];

  if (ShapeClass) {
    return new ShapeClass();
  } else {
    throw new Error(`Invalid shape: ${shapeName}`);
  }
}

init();