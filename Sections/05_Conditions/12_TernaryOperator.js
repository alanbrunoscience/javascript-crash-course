/**
 * The ternary operator
 * 
 * → Short 'if' conditions can sometimes be written using the ternary operator. The ternary 
 * operator is a short way of writing an 'if...else' statement.
 * 
 * → The ternary operator has the following syntax:
 * 
 * • condition ? expressionWhenTrue : expressionWhenFalse
 * 
 * → While the ternary operator can make your code more concise, it can also make it less 
 * readable. We generally recommend you avoid it and opt for more readable code.
 * 
 * → Let's go back to the solution of the previous challenge:
 * 
 */

'use strict';

const readlineSync = require("readline-sync");

function evenOrOdd(input) {

  const number = Number.parseInt(input);

  if (Number.isNaN(number) || number.toString() !== input.trim()) {
    return "invalid number";
  }

  if (number % 2 === 0) {
    return "even";
  }

  return "odd";
}

// It can be written using the ternary operator as follows:
function evenOrOdd2(input) {
  const number = Number.parseInt(input);

  if (Number.isNaN(number) || number.toString() !== input.trim()) {
    return "invalid number";
  }

  return (number % 2 === 0) ? "even" : "odd";
}

function main() {

  const numberInput = readlineSync.question("Enter an integer number: ");

  console.log(`\n-> The result for evenOrOdd: ${evenOrOdd(numberInput)}.`);
  console.log(`-> The result for evenOrOdd2: ${evenOrOdd2(numberInput)}.`);

}

main();

module.exports = { evenOrOdd, evenOrOdd2 };