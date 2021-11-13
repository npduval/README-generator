  // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
'What is your GitHub username?', 
'What is your email address?',
'What is your project name?',
'Provide a short description of your Project',
'What liscence?',
'What command should be used to run install dependencies?',
'What command should be used to run tests?',
'What does the user need to know about using repo?',
'What does user need to know about contributing to the repo?'
];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[1],
    },
    {
        type: 'input',
        name: 'title',
        message: questions[2],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[3],
    },
    {
        type: 'list',
        name: 'liscence',
        message: questions[4],
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
    },
    {
        type: 'input',
        name: 'installation',
        message: questions[5],
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: questions[6],
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: questions[7],
    },
    {
        type: 'input',
        name: 'contributing',
        message: questions[8],
    },
  ])
  .then((data) => {
  console.log(data);
  const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
  writeToFile(fileName, data);
  });

// TODO: Create a function to write README file
 function writeToFile(fileName, {github, email, description, liscence, installation,tests, usage, contributing } = data) {
    const preview = `<h1>Description</h1>
     <p>${description}</p>
      <h1>Table of Contents</h1>
      <h1>Installation</h1>
      <p>${installation}</p>
      <h1>Usage</h1>
      <p>${usage}</p>
      <h1>Liscence</h1>
      <p>${liscence}</p>
      <h1>Contributing</h1>
      <p>${contributing}</p>
      <h1>Tests</h1>
      <p>${tests}</p>
      <h1>Questions</h1>
     <p>If you have any questions about the repo, open an issue or contact me directly at ${email}. You may see more of my work at URL with ${github}`;
     

    


fs.writeFile(fileName, preview, (err) =>
  err ? console.error(err) : console.log('File created!')
);
 }
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
