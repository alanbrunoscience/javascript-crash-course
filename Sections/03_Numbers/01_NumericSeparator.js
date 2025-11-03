/**
 * Numeric separator (_)
 * 
 * → You can represent larger numbers clearer, if you wish, with the numeric separator (_). For example:
 * 
 */

'use strict';

let num1 = 1_000; // equivalent to 1000
let num2 = 1_000_000; // 1000000 (1 million)
let num3 = 10_00 // The _ is taken out by JavaScript from the number. So, 10_00 is equivalent to 1000.

console.log(num1); // 1000
console.log(num2); // 1000000
console.log(num3); // 1000