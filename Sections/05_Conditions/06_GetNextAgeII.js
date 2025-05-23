/**
 * Get next age II
 * 
 * Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
 * 
 * Note that the age is provided by the user in a text box (which you can try in the browser tab). However, when the text box 
 * is empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.
 * 
 */

'use strict';

const readlineSync = require("readline-sync");

function getNextAge(age) {
  if (age === '') {
    return 0;
  }

  return Number.parseInt(age, 10) + 1;

}

function main() {
  const age = readlineSync.question("Enter your age: ");

  console.log(getNextAge(age));

}

main();

module.exports = { getNextAge };
