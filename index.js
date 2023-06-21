const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./assets/shapes');

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
    name: 'shape-color',
    message: 'What color would you like your logos text to be?'
  },
]


