/**
 * .filter() vs .find()
 * 
 * - So, what is the difference between .filter() and .find()?
 * 
 * - The difference has to do with the return type of these 2 methods:
 * 
 * -> 1. The '.filter()' method always returns an array;
 * 
 * -> 2. The '.find()' method returns the first array item that matches the callback condition or undefined.
 * 
 * - Let's take a look at a few examples:
 * 
 */

const numbers = [9, 5, 14, 3, 11];

// .filter() ALWAYS returns an array
const a = numbers.filter(function (number) {
  return number >= 12;
});

console.log(a); // [ 14 ]

// .find() returns the first match or undefined
const b = numbers.find(function (number) {
  return number >= 12;
});

console.log(b); // 14

// Notice how the .filter() is returning an array, even if there's only 1 item that matches your condition. In contrast, the .find() method 
// will return the first item that matches the condition.

// Note! .filter() always returns an array. Even if it matched one item or no items.