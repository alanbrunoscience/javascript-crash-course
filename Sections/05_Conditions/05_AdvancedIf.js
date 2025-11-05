/**
 * Advanced if
 * 
 * → It is possible sometimes to drop the else. Let's take a look at an example:
 * 
 */

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

/**
 * Legacy note
 * 
 * → A quick legacy note. If you encounter '==' (double equal) in JavaScript, aim to replace 
 * it with '===' triple equal.
 * 
 * → The double equal operator performs some conversions that you wouldn't expect. Always stick
 * with triple equal instead.
 * 
 * ✅ Always use triple equal '===' when comparing the quality of 2 values in JavaScript.
 * 
 * → If you'd like to know more why == is not recommended, then check this comparison:
 * 
 * • "2" == 2;
 * 
 * Would this return 'true' or 'false'?
 * 
 * → It would return true because JavaScript will try to convert both values into the same data 
 * type. Please don't consider this a "feature". Instead, you should avoid it and always use triple
 * equal '===', which only returns true if both sides are the same data type and same value.
 * 
 */