/**
 * Get division remainder by 2 
 * 
 * Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" 
 * otherwise.
 * 
 * Can you make it work with negative numbers too?
 */

'use strict';

const readlineSync = require("readline-sync");

function evenOrOdd(number) {

  if(number % 2 === 0) {
    return "even";
  }

  return "odd";

}

function main() {

  const number = readlineSync.question("Enter a number: ");

  console.log(`\n-> The number entered is ${evenOrOdd(number)}.`);

}

main();

module.exports = { evenOrOdd };

