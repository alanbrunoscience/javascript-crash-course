/**
 * Strings .endsWith()
 * 
 * - The '.endsWith(substring)' works the same but for the 'end' of the string.
 */

'use strict';

const sentence = "Hello there. Welcome!";

console.log(sentence.endsWith(".")); // false
console.log(sentence.endsWith("!")); // true
console.log(sentence.endsWith("Welcome!")); // true
console.log(sentence.endsWith("Welcome")); // false