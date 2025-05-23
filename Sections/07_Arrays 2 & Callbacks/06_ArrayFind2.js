'use strict';

const numbers = [9, 5, 14, 3, 11];

const firstNumberAboveTen = numbers.find(function (number) {
  return number > 10;
});

console.log(firstNumberAboveTen); // 14

// Notice how even though there are 2 numbers that satisfy the condition, the .find() method stops at the first one that satisfies 
// the condition.