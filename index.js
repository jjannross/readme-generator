const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./generateMarkdown");

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
    name: "name",
  },
  {
    type: "input",
    message: "Please write a short description of project?",
    name: "description",
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
    name: "know",
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
# ${response.name}
![Github license]

## Description:

${response.description}

## Table of Contents
    [Installation](#Installation)
    [Usage](#Usage)
    \* \[License\]\(Installation\)
    * Contributingcs
    * Tests 
    * Questions 
      
## Installation
To install necessary dependencies, run the following command:
      
\`\`\`
${response.dependencies}
\`\`\`
## Usage 
\`\`\`
${response.know}
\`\`\`
      
## License  
This product is licensed under the ${response.license} license. 
      
## Contributing
${response.contribute}
      
## Tests 
To run tests, run the following command:
      
\`\`\`
${response.tests}
\`\`\`
      
## Questions 
If you have any questions about the repo open an issue or contact me directly at ${response.email}. You can find more of my work at ${response.github}.        
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
