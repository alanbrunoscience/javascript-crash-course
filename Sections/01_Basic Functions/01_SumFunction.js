'use strict';

/**
 * The return keyword will quit the function with the result (which is x + y), so the code afterward will never run!
 */

function sum(a, b) {
  return a + b;
  console.log("Hello World"); // this will NEVER run
}

// sample usage - do not modify
console.log(sum(1, 3)); // 4
console.log(sum(2, 5)); // 7