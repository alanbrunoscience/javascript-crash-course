/**
 * Sum grades
 * 
 * Calculate the sum of the 'grades' array and store it in a variable called 'sum'.
 * 
 */

'use strict';

const sum = (grades) => {
  return grades.reduce((accumulator, grade) => {
    return accumulator + grade;
  }, 0);
} 

function main() {
  const grades = [10, 5, 15, 20];
  console.log(sum(grades)); // 50
}

main();