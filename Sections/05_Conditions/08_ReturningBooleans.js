/**
 * Returning booleans
 * 
 * → Whenever you're returning a boolean ('true' or 'false'), it's quite redundant to use 'if'
 * and 'else'. Here's an example:
 * 
 */

'use strict';

function isPassing(grade) {
  if (grade >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isPassing(12)); // true

/**
 * → This is redundant because grade >= 10 on its own, evaluates to 'true' or 'false' depending 
 * on the grade. This means you don't need to wrap it with an if/else statement. That's why you 
 * can refactor it like this:
 * 
 */

function isPassing2(grade) {
  return grade >= 10;
}

console.log(isPassing2(9)); // false

// without using if/else which will always return a boolean!

// This only works whenever you're returning a boolean from a function.