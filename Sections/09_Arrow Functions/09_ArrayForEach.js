/**
 * Revisiting array methods
 * 
 * In this lesson, we'll take a look at how we can use arrow functions in some of the array methods that we've seen.
 * 
 */

'use strict';

const grades = [10, 8, 13];

// grades.forEach(function(grade) {
//   console.log(grade);
// });

grades.forEach((grade) => {
  console.log(grade);
});

// Also, because the arrow function has one parameter (without a default value), you are allowed to drop the 
// parentheses () surrounding the parameter:

grades.forEach(grade => {
  console.log(grade);
});

// This is only the case when you have one parameter. Multiple parameters have to be wrapped in parentheses ().