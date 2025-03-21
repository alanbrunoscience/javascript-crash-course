/**
 * The .at(index) method
 * 
 * - Since 2022, JavaScript now has a .at() method that reads the character at a certain index, which can also be negative.
 * 
 */

const language = "JavaScript";

console.log(language.at(0)); // "J"
console.log(language.at(1)); // "a"
console.log(language.at(-1)); // "t"
console.log(language.at(-2)); // "p"

console.log(language[-1]); // You can continue using the square bracket syntax for all other use cases, knowing that language[-1] returns undefined. So, whenever you want to use a negative index, you should use the .at() method.