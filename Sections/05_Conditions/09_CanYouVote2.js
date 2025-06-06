/**
 * Can you vote (improved) 
 * 
 * Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios. You should
 * not use an if condition (or ternary).
 * 
 */

'use strict';

function canVote(age) {
  return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false
