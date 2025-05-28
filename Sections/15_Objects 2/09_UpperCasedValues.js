/**
 * Upper cased values
 * 
 * Complete the function 'getUpperCasedValues' such that it returns an array containing every property value in the 'course' 
 * parameter it receives. Every property value should be in upper case. Check the sample usage to see the expected output.
 * 
 */

'use strict';

const getUpperCasedValues = course => {
  return Object.values(course).map(value => value.toUpperCase());
}

// Sample usage - do not modify
console.log(getUpperCasedValues({name: "Learn JavaScript"})); // ["LEARN JAVASCRIPT"]
console.log(getUpperCasedValues({name: "Learn JavaScript", category: "Programming"})); // ["LEARN JAVASCRIPT", "PROGRAMMING"]
console.log(getUpperCasedValues({})); // []