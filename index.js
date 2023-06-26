const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./assets/shapes');
const validateTextChoice = require('./assets/validation');
// const { validateTextChoice } = require('./assets/validateTextChoice');
const path = require('path');
const outputFolder = './logos'
const userPrompts = [
  {
    type: 'input',
    name: 'text',
    message: 'What letters would you like displayed on your logo, up to 3?',
    validate: validateTextChoice,
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color would you like your logo to be?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?', 
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'What color would you like your logos text to be?',
  },
];

class RenderLogo {
  constructor() {
    this.text = '';
    this.shapeColor = '';
    this.textColor = '';
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.userShape}  ${this.userText}</svg>`;
  }

  newText(text, color) {
    this.userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"> ${text}</text>`;
  }

  newShape(shape) {
    this.shapeColor = shape.color;
    shape.setColor(this.shapeColor);
    this.userShape = shape.render();
  }
}

function init() {
  inquirer.prompt(userPrompts)
    .then((answers) => {
      const logo = new RenderLogo();
      logo.newText(answers.text, answers['text-color']);
      logo.newShape(createShapeInstance(answers.shape));
      return {
        svgContent: logo.render(),
        answers: answers
      };
    })
    .then(({ svgContent, answers }) => {
      const svgFile = `${answers.text}${answers.color}.svg`;
      saveSVGToFile(svgFile, svgContent, saveSVGToFileCallback.bind(null, answers));
    })
    .catch((error) => {
      console.log(error);
    });
}

function saveSVGToFileCallback(answers, error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Logo completed! Check out the output folder for the generated SVG file.');
  }
}

function saveSVGToFile(file, data, callback) {
  const filePath = path.join(outputFolder, file);
  fs.writeFile(filePath, data, callback);
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
// create a fodler for the files to be created, fix the background color, create tests.
init();