'use strict';

function canVote(age) {
  
  if(age >= 18) {
    return true;
  }

  return false;
  
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false