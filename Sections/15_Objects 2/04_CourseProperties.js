/**
 * Course properties 
 * 
 * Complete the function 'getCountProperties' such that it returns the number of keys in the object course it receives. Check the sample 
 * usage to see the expected output.
 * 
 * Note: this challenge is most likely easier than you think. If you think you're over-complicating it, then check out the hints.
 * 
 */

'use strict';

const getCountProperties = course => {
  return Object.keys(course).length;
}

// Sample usage - do not modify
console.log(getCountProperties({ id: 1, name: "Learn JavaScript", year: 2021, category: "Programming" })); // 4
console.log(getCountProperties({ name: "Learn JavaScript", category: "Programming" })); // 2
console.log(getCountProperties({})); // 0