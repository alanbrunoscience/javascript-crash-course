'use strict';

const readlineSync = require("readline-sync");

function getNumberOfChars(name) {

  return name.length;

}

function getFirstChar(name) {

  return name[0];

}

function getLastChar(name) {

  return name.at(-1);

}

function getLower(name) {

  return name.toLowerCase();

}

function getUpper(name) {

  return name.toUpperCase();

}

function getCapitalized(name) {

  return name[0].toUpperCase() + name.substring(1).toLowerCase();

}

const name = readlineSync.question("Enter your name: ");

console.log(`Number of characters: ${getNumberOfChars(name)};`);
console.log(`First character: ${getFirstChar(name)};`);
console.log(`Last character: ${getLastChar(name)};`);
console.log(`Lower case: ${getLower(name)};`);
console.log(`Upper case: ${getUpper(name)};`);
console.log(`Capitalize: ${getCapitalized(name)}.`);

// Export the function for use in other modules (if needed)
module.exports = { getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized };