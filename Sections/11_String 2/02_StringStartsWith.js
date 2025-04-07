/**
 * String .startsWith()
 * 
 * - The .startsWith(substring) method returns true when the substring is found at the beginning of the string and false otherwise.
 */

const sentence = "Hello there. Welcome!";

console.log(sentence.startsWith("H")); // true
console.log(sentence.startsWith("Hello")); // true
console.log(sentence.startsWith("Hey")); // false
console.log(sentence.startsWith("Sam")); // false
