'use strict';

const readlineSync = require('readline-sync');

function getNextAge(age) {
  return Number.parseInt(age, 10) + 1;
}

console.log("*** YOUR AGE NEXT YEAR ***\n");

// Data Input
const inputAge = readlineSync.question("Enter age: ");

// Storing the result of the function
const result = getNextAge(inputAge);

// Data Output
console.log(`\n→ Next year, you will be ${result}.`);

// Export the function for the use in other modules (if needed)
module.exports = { getNextAge };