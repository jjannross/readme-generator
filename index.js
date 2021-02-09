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
  {
    type: "list",
    message: "What kind of license?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm test",
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

function init() {
  inquirer.prompt(questions).then((response) => {
    if (response.license === "MIT") {
      var license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (response.license === "APACHE 2.0") {
      var license =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (response.license === "GPL 3.0") {
      var license =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
    } else if (response.license === "BSD 3") {
      var license =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      var license = "None";
    }
    const content = `
# ${response.name}
${license}

## Description:

${response.description}

## Table of Contents
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  
      
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
If you have any questions about the repo open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.github}](http://github.com/${response.github}/). Click [here](https://drive.google.com/file/d/1Aewm7N76U0gWsuE5oUKTJe22biyxYcJC/view) to watch a complete demonstration of this readme-generator.
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
