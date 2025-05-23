/**
 * 1️⃣ Introduction to arrow functions
 * 
 * An arrow function has 3 main benefits:
 * 
 * 1. It's shorter to write.
 * 2. It uses lexical scope (this will be explained in a later chapter as we need to learn about classes first).
 * 3. It can benefit from implicit return (covered in the next chapter).
 * 
 * (Just to let you know, functions are not deprecated. It is preferable that you use arrow functions because of their
 * benefits.)
 * 
 * Here's an example of an arrow function:
 * 
 * const sum = (a, b) => {
 *   return a + b;
 * }
 * 
 * 2️⃣ From Function To Arrow Function
 * 
 * There are multiple ways of writing a function in JavaScript. You could either define a function and give it a name, 
 * or you could define a variable and assign it to an anonymous function. So the following function:
 * 
 * function sum(a, b) {
 *   return a + b;
 * }
 * 
 * Can be written as:
 * 
 * const sum = function (a, b) {
 *   return a + b;
 * }
 * 
 * Notice how we define a variable 'sum' and then we assign it to a function that takes 2 parameters 'a' and 'b'. Now,
 * let's convert that function into an arrow function.
 * 
 * You can do that in 2 steps:
 * 
 * 1. Remove the 'function' keyword;
 * 2. Add an arrow (=>) between the parameters (a, b) and the opening curly brace {
 * 
 * This is what it will look like:
 * 
 */

'use strict';

const sum = (a, b) => {
  return a + b;
}

console.log(sum(2, 3));

// Arrow functions always start with the parameters, followed by the arrow => and then the function body.

/**
 * ⚠️ Note
 * 
 * To make this function more concise, you could write it like this:
 * 
 * -> const sum = (a, b) => a + b;
 * 
 * In this case, the 'return' is implicit.
 */