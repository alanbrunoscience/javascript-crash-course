/**
 * Sum grades
 * 
 * - Using arrow functions, complete the function 'sumGrades' such that it returns the sum of all the grades it receives 
 * as a parameter. We haven't seen reduce yet, so try to solve it using what you have learned so far.
 */

// function sumGrades(grades) {
//   let sum = 0;
//   grades.forEach(function(grade) {
//     sum += grade;
//   });
//   return sum;
// }

const sumGrades = (grades) => {
  let sum = 0;
  grades.forEach(grade => {
    sum += grade;
  });
  return sum;
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54