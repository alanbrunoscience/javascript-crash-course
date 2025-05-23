/**
 * Now let's take a look at an example where no items satisfy the condition:
 * 
 */

'use strict';

const numbers = [9, 5, 14, 3, 11];

// .filter() ALWAYS returns an array (even if it's empty)
const a = numbers.filter(function (number) {
  return number >= 15;
});

console.log(a); // [ ]

// .find() returns the first match or undefined (when none of the items satisfy the condition)
const b = numbers.find(function (number) {
  return number >= 15;
});

console.log(b); // undefined

// Notice how the .filter() returned an empty array and the .find() returned undefined.

// Note! .find(callback) can return undefined. You may have to wrap its result in an if condition to avoid unexpected
// errors if you end up calling a method on its result.