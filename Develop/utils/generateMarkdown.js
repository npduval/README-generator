// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    // [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown ({github, email, description, liscence, installation,tests, usage, contributing } = data){
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
}

module.exports = generateMarkdown;
