/**
 * Sum grades
 * 
 * - Calculate the sum of the 'grades' array and store it in a variable called 'sum'.
 */

"use strict"

let grades = [10, 5, 15, 20]

// calculate the sum of these grades
const sum = grades.reduce((accumulator, grade) => {
  return accumulator + grade;
}, 0);

console.log(sum);
