const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "project-name",
  },
  {
    type: "input",
    message: "Please write a short description of project?",
    name: "project-description",
  },
  //LICENSE
  {
    type: "checkbox",
    message: "What kind of license?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "need-know",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing the repo?",
    name: "contribute",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const content = `
# ${data.project-name}
![Github license]
(license with logo badge)
## Description:
${data.project-description}
## Table of Contents
links: 
    Installation [Installation] (#installation)
    Usage 
    license
    Contributing
    Tests 
    Questions 
      
## Installation
To install necessary dependencies, run the following command:
      
\`\`\`
$(data.dependencies)
      \`\`\`
      ## Usage 
      \`\`\`
      $(data.need-know)
      \`\`\`
      
       ## license
      
       This product is licensed under the NAME THEY PICK #license license. 
      
       ## Contributing
       $(data.contribute)
      
       ## Tests 
       To run tests, run the following command:
      
\`\`\`
$(data.tests)
\`\`\`
      
## Questions 
If you have any questions about the repo open an issue or contact me directly at $(data.email). You can find more of my work at $(data.github).        
            `;

    writeToFile("README.md", content);
  });
}

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) console.log(err);
    else console.log("generating readme");
  });
}

init();
