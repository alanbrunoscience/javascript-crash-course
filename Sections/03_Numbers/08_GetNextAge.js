'use strict';

const readlineSync = require('readline-sync');

function getNextAge(age) {

  return Number.parseInt(age, 10) + 1;

}

// let age = readlineSync.questionInt("Enter your age: ");
let age = readlineSync.question("Enter your age: "); // To simulate the data input from DOM, as a string.

console.log(`\n-> Next year, you will be ${getNextAge(age)}.`);

module.exports = { getNextAge };