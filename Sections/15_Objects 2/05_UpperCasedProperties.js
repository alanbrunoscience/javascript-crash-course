/**
 * Upper cased properties 
 * 
 * Complete the function 'getUpperCasedProperties' such that it returns an array containing every property in 
 * the course parameter it receives. Every key should be in upper case. Check the sample usage to see the 
 * expected output.
 * 
 */

'use strict';

const getUpperCasedProperties = course => {
  return Object.keys(course).map(key => key.toUpperCase());
}

// Sample usage - do not modify
console.log(getUpperCasedProperties({ id: 1, name: "Learn JavaScript", year: 2021 })); // ["ID", "NAME", "YEAR"]
console.log(getUpperCasedProperties({ name: "Learn JavaScript", category: "Programming" })); // ["NAME", "CATEGORY"]
console.log(getUpperCasedProperties({})); // []

