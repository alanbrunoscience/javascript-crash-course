'use strict';

const readlineSync = require('readline-sync');

function getDescription(text) {
  return text.substring(0, 10) + "...";
}

const description = readlineSync.question("Enter your text here: ");

console.log("\n→ " + getDescription(description));

// Export the function for the use in other modules (if needed)
module.exports = { getDescription };