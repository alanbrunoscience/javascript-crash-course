/**
 * .length property
 * 
 * You can get the number of elements in an array by using the .length property. For example:
 * 
 */

'use strict';

console.log([].length); // 0

const grades = [10, 8, 13, 15];

console.log(grades.length); // 4

// Note that .length is a property (pre-computed value) and not a function. That's why you should not have () after it.