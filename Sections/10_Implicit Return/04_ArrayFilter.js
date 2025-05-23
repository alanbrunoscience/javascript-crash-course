// Array filter(callback)

'use strict';

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
  return number > 10;
});

console.log(numbersAboveTen); // [14, 11]

// The .filter(callback) can be re-written as follows:

const numbersAboveTen2 = numbers.filter(number => number > 10);

console.log(numbersAboveTen2); // [14, 11]

// Here's how you can read it: We filter the numbers where the number is bigger than 10.