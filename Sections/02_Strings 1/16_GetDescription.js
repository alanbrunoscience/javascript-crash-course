'use strict';

const readlineSync = require('readline-sync');

function getDescription(text) {

  return text.substring(0,10);

}

const name = readlineSync.question("Enter text: ");

console.log(getDescription(name));

// Export the function for use in other modules (if needed)
module.exports = { getDescription };