/**
 * Array.every(callback)
 * 
 * The Array .every(callback) method returns true when EVERY item in the array satisfies the condition provided in the 
 * callback. Here's an example:
 * 
 */

'use strict';

const numbers = [15, 12, 20];

const allAbove10 = numbers.every(number => number > 10); // true
const allAbove15 = numbers.every(number => number > 15); // false

console.log(allAbove10); // true
console.log(allAbove15); // false

/**
 * Notice how allAbove10 evaluates to true because every item in the numbers array returned true for the condition 
 * number > 10. So, the callback number => number > 10 is being called for every item in the array. And, if all the 
 * callbacks returned true, then the .every() method will return true.
 * 
 * Otherwise, it will return false (if at least one of the callbacks returned false).
 * 
 * This is why allAbove15 is evaluated as false because not all the items inside the items array satisfy the condition 
 * number > 15. One of them (number = 10) returned false from the callback. So, the .every() method returns false.
 * 
 */