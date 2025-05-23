'use strict';

const getRaisedGrades = grades => {
  return grades.map(function (grade) {
    if (grade + 1 > 20) {
      return 20;
    }
    return grade + 1;
  }).join(", ");
}

/**
 * Can you use implicit return here?
 * 
 * - The function body is more than one line so you cannot use implicit return. If you'd like,
 * you can re-write it with arrow functions:
 */

const getRaisedGrades2 = grades => {
  return grades.map(grade => {
    if (grade + 1 > 20) {
      return 20;
    }
    return grade + 1;
  }).join(", ");
}