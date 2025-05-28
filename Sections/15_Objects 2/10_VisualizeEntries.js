/**
 * Visualize entries
 * 
 * This is a visualization challenge meaning that the goal of it is for you to visualize how a method works.
 * 
 * Complete the function 'visualizeEntries' such that it returns the entries from the 'course' object it receives as a 
 * parameter. Then look at the result in the console and spend some time understanding how the object gets converted into an 
 * array of arrays.
 * 
 */

'use strict';

const visualizeEntries = course => {
  return Object.entries(course);
}

// Sample usage - do not modify
console.log(visualizeEntries({ id: 1, name: "Learn JavaScript", year: 2021 }));
console.log(visualizeEntries({ name: "Learn JavaScript", category: "Programming" }));
console.log(visualizeEntries({}));