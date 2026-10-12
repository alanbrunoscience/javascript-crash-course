'use strict';

/**
 * The '.at(index)' method
 *
 * → Since 2022, JavaScript now has a '.at()' method that reads the character at a certain index,
 * which can also be negative. Let's take a look at a few examples:
 *
 */

let language = "JavaScript";

console.log(language.at(0)); // 'J' (first character)
console.log(language.at(1)); // 'a' (second character)
console.log(language.at(-1)); // 't' (last character)
console.log(language.at(-2)); // 'p' (second-to-last character)

/**
 * Note:
 *
 * → The primary use case for the '.at()' method is negative indices, making it easier than relying
 * on the '.length' property. However, you can use whichever approach you prefer;
 *
 * → When a negative index is specified, you start counting from the end. '-1' is the last character,
 * '-2' is the second-to-last character, and so on;
 *
 * → You can continue using the square bracket syntax for all other use cases, knowing that 'language[-1]'
 * returns 'undefined';
 *
 * → So, whenever you want to use a negative index, you should use the '.at()' method instead.
 *
 */

console.log(language[-1]); // undefined