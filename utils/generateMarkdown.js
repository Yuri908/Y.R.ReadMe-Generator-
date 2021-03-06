// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=="none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  if (license =="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license =="GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license == "APACHE"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
    return "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#install)
    * [Usage](#usage)
    * [Contributors](#contributors)
    * [License](#license)
    * [Contact](#contact)

    ## Installation
    ${data.install}

    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contributors}

    ## Contact
    If you have comments or concerns feel free to contact me via github or email:
    ${data.github}
    ${data.email}

    ## License
    This application is protected under the ${renderLicenseBadge(data.license)} license.
`;
}

module.exports = generateMarkdown;
