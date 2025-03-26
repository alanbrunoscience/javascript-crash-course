/**
 * The Ternary Operator
 * 
 * - Short if conditions can sometimes be written using the ternary operator. The ternary 
 * operator is a short way of writing an if...else statement.
 * 
 * - The ternary operator has the following syntax:
 * 
 * -> condition ? expressionWhenTrue : expressionWhenFalse
 * 
 * - Let's go back to the solution of the previous challenge:
 */

const readlineSync = require("readline-sync");

function evenOrOdd(number) {

  if(number % 2 === 0) {
    return "even";
  }

  return "odd";

}

// It can be written using the ternary operator as follows:
function evenOrOdd2(number) {
  return (number % 2 === 0) ? "even" : "odd";
}

function main() {

  const number = readlineSync.question("Enter a number: ");

  console.log(`\n-> The number entered is ${evenOrOdd(number)}.`);
  console.log(`\n-> The number entered is ${evenOrOdd2(number)}.`);

}

main();

module.exports = { evenOrOdd, evenOrOdd2 };