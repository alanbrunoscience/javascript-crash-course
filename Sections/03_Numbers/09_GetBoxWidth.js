/**
 * Get Box Width
 * 
 * - Complete the function getBoxWidth such that it returns the width (as a number) from the string it receives.
 * 
 * - Note that the string it receives looks like 50px or 100px (which is used in CSS) whereas the functions should return 
 * a number from these strings.
 */

const readlineSync = require("readline-sync");

function getBoxWidth(value) {
  return Number.parseInt(value, 10);
}

let width = readlineSync.question("Enter the width: ");

console.log(`\n-> The width value is ${getBoxWidth(width)}.`);

module.exports = { getBoxWidth };