// Array Map (callback)

'use strict';

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled); // [ 8, 4, 10, 16 ]

// The .map(callback) can be re-written as follows:

const doubled2 = numbers.map(number => number * 2);

console.log(doubled2); // [ 8, 4, 10, 16 ]

// This can be read as: Create a new array based on the 'numbers' array, where every number is multiplied by 2.