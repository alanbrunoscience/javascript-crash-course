/**
 * String sizes
 * 
 * Complete the function getStringSizes such that it returns an array of the number of characters for every string it
 * receives in the strings parameter.
 * 
 * This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 
 * characters and the second string is made up of 1 character.
 * 
 * Note that the tests will check that you are using an arrow function when iterating over the array (implicit return 
 * is optional).
 * 
 */

'use strict';

const getStringSizes = strings => {
  return strings.map(string => string.length);
}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]