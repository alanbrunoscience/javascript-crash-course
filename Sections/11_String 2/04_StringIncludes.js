/**
 * String .includes(substring)
 * 
 * - The .includes(substring) method returns 'true' when the substring can be found anywhere in the string and 'false' otherwise.
 */

'use strict';

const sentence = "Hello there. Welcome!";

console.log(sentence.includes("there")); // true
console.log(sentence.includes("W")); // true
console.log(sentence.includes("Hello")); // true
console.log(sentence.includes("Hey")); // false
console.log(sentence.includes("Sam")); // false
console.log(sentence.includes(".")); // true
console.log(sentence.includes("!")); // true
console.log(sentence.includes("Welcome")); // true