/**
 * Arrays & const
 * 
 * Even though the variable numbers was defined with const, we were able to push new data into it. That's because const means 
 * you can only assign the variable once when it's defined. But it doesn't mean the variable is immutable. Its content can change.
 * 
 * What's the benefit of declaring it as a const you ask? The benefit is that once you define it as an array, it will always stay
 * as an array which means you can safely call array methods on it. However, the array content can change.
 * 
 */

'use strict';

const numbers = []; // start with empty array

numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)

numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)