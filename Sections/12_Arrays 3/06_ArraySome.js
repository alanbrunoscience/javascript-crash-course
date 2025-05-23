/**
 * Array.some(callback)
 * 
 * Similarly, the Array .some(callback) method returns true when AT LEAST ONE item in the array satisfies the condition 
 * provided in the callback.
 * 
 */

'use strict';

const numbers = [15, 12, 20];

const someOver18 = numbers.some(number => number > 18); // true
const someUnder10 = numbers.some(number => number < 10); // false

console.log(someOver18); // true
console.log(someUnder10); // false

/**
 * Notice how 'someOver18' evaluates to 'true' because at least one of the items in the numbers array returned 'true' 
 * for the condition number > 18.
 * 
 * Whereas 'someUnder10' evaluates to 'false' because NONE of the items in the numbers array returned 'true'.
 * 
 */