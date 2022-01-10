// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")
const path = require("path")
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your project!');
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
    type: 'input',
    name: 'install',
    message: 'Please include instructions on how to install your project(Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter instructions on how to install your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples on how to use your project(Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please provide instructions and examples for use!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Would you like to add a list of your collaborators, if any, with links to their GitHub profiles?',
    default: true
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborator, with links to their GitHub profiles.:',
    when: ({ confirmCredits }) => confirmCredits
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub link(Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub link!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email(Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your Email!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a desire license (Required)',
    choices: ["MIT", "GNU", "APACHE", "None"]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  console.log("=== ReadMe Generator ===")
  inquirer.prompt(questions)
    .then((responses) => {
      console.log("this are your responses")
      console.log(responses)
      writeToFile("ReadMe.md", generateMarkdown({ ...responses }))
    })
}

// Function call to initialize app
init();
