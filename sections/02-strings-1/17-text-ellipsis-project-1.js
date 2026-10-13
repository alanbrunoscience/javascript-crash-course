'use strict';

const readlineSync = require('readline-sync');

function getDescription(text) {
  return text.substring(0, 10);
}

// Data Input
const inputName = readlineSync.question("Enter the text: ");

// Storing the result of the function
const result = getDescription(inputName);

// Data output
console.log("\n→ The first 10 characters of '" + inputName + "' are: " + result);

// Export the function for the use in other modules (if needed)
module.exports = { getDescription };