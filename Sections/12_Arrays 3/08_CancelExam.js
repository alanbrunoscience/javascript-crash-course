/**
 * Cancel Exam
 * 
 * Complete the function 'shouldCancelExam' such that it returns 'true' when the exam needs to be canceled.
 * 
 * An exam must be canceled if all the students' grades were very high (18 and above).
 * 
 */

'use strict';

const shouldCancelExam = grades => grades.every(grade => grade >= 18);

// Or
// const shouldCancelExam = grades => {
//   return grades.every(grade => grade >= 18);
// }

// Sample usage - do not modify
console.log(shouldCancelExam([10, 12, 10, 14])); // false
console.log(shouldCancelExam([18, 4])); // false
console.log(shouldCancelExam([19, 18, 18])); // true