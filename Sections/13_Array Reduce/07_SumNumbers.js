/**
 * Sum numbers
 * 
 * Complete the function such that it returns the sum of the 'numbers' it receives as a parameter.
 * 
 */

'use strict';

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);
}

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])) // 60
console.log(sumNumbers([2, 4, 2, 10])) // 18