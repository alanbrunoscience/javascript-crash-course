/**
 * Get Division Remainder By 2
 * 
 * - Complete the function getDivisionRemainderBy2 such that it returns the division remainder of the number it 
 * receives by 2. This means that it should return the division remainder by 2. This challenge will further be 
 * developed into a small app that shows whether the number is even or odd in a future chapter. Make sure to try
 *  it out in the browser tab!
 */

const readlineSync = require("readline-sync");

function getDivisionRemainderBy2(number) {
  return Number.parseInt(number, 10) % 2;
}

const number = readlineSync.question("Enter a number, please: ");

console.log(`\n-> Division remainder by 2 is ${getDivisionRemainderBy2(number)}.`);

module.exports = { getDivisionRemainderBy2 };