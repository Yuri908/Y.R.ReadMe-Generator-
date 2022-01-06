// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project(Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false;
          }
        }
      },
    
    {
      type: 'confirm',
      name: 'confirmTable',
      message: 'Would you like to have a table of contents ?',
      default: true
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Instructions on how to install your project(Required)',
        validate: instalInput => {
          if (instalInput) {
            return true;
          } else {
            console.log('Please enter instructions on how to install your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions and examples on how to use your project(Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please Provide instructions and examples for use!');
            return false;
          }
        }
      },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      }

  ];

      
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


function init(
) {
    console.log("=== ReadMe Generator ===")
    inquirer.prompt(questions)
    .then((responses) => {
        console.log(responses)
    } )
}

// Function call to initialize app
init();
