/**
 * Multiply numbers
 * 
 * Complete the function 'multiplyNumbers' such that it multiplies every number from the 'numbers' parameter it receives.
 * 
 */

'use strict';

const multiplyNumbers = numbers => {
  return numbers.reduce((accumulator, number) => {
    return accumulator * number;
  }, 1);
}

// Sample usage - do not modify
console.log(multiplyNumbers([10, 20, 30])) // 6000
console.log(multiplyNumbers([2, 4, 2, 10])) // 160
