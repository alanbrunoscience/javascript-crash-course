'use strict';

/**
 * Get division remainder by 2
 *
 * → Complete the function "getDivisionRemainderBy2" such that it returns the division remainder of the "number"
 * it receives by '2'. This means that it should return the division remainder by '2'.
 *
 */

const readlineSync = require('readline-sync');

function getDivisionRemainderBy2(number) {
  return Number.parseInt(number) % 2;
}

console.log("*** DIVISION REMAINDER ***\n");

// Data Input
const inputNumber = readlineSync.question("Enter number: ");

// Storing the result of the function
const result = getDivisionRemainderBy2(inputNumber);

// Data Output
console.log(`\n→ ${Number.parseInt(inputNumber)} % 2 = ${result}.`);

// Export the function for the use in other modules (if needed)
module.exports = { getDivisionRemainderBy2 };
