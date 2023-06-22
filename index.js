const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./assets/shapes');
const { validateTextChoice } = require('./assets/validateTextChoice');
// const svg = require('svg') this is only for website use right? 
const userPrrompts =[
  {
    type: 'input',
    name: 'text',
    message: 'What letters would you like dispalyed on your logo, up to 3?'
  },
  {
    type: 'list',
    name: 'color',
    message: 'Which color would you like your logo to be?',
    choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White']
  },
  {
    type: 'list',
    name: 'what shape would you like on your logo?', 
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
  let svgRender = "";
  let svgFile = "logo.svg";

  inquirer.prompt(promptUser)
    .then((answers) => {
      return writeSVG(svgFile, svgRender);
    })
    .then(() => {
      console.log("Logo completed! Check out the output folder for the generated svg file");
    })
    .catch((error) => {
      console.log(error);
    });
}
function writeSVG(file, data) {
  return fs.writeFile(file, data);
}