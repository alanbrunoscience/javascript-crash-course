'use strict';

/**
 * Number Methods
 *
 * → While there are some other methods you could call on numbers, they are not very commonly used. What is commonly
 * used, however, is the "Math" object which contains methods such as "min()", "max()", "round()":
 *
 * • "Math.round()" rounds a number to the nearest whole number; if the decimal part is 0.5 or higher, it rounds up,
 * otherwise it rounds down.
 *
 * • "Math.floor()" always "floors" (ROUNDS DOWN) the number to the next lower integer.
 *
 * • "Math.ceil()" always "ceils" (ROUNDS UP) the number to the next higher integer.
 *
 */

// Math.round()

console.log(Math.round(2.1)); // 2
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.5)); // 3

// Math.floor()

console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.6)); // 2
console.log(Math.floor(2.5)); // 2

// Math.ceil()

console.log(Math.ceil(2.1)); // 3
console.log(Math.ceil(2.6)); // 3
console.log(Math.ceil(2.5)); // 3