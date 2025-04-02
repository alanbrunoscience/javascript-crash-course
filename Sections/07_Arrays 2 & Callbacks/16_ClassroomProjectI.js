"use strict"

const readlineSync = require("readline-sync");

function getNumberOfGrades(grades) {
  // TODO: return the number of grades
  return grades.length;
}

function getSumGrades(grades) {
  // TODO: return the sum of all the grades
  let sum = 0;
  grades.forEach(function(grade) {
      sum += grade;
  });
  return sum;
}

function getAverageValue(grades) {
  // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
  return getSumGrades(grades) / grades.length;
}

function getPassingGrades(grades) {
  // TODO: return all passing grades (10 and above)
  return grades.filter(function(grade) {
      return grade >= 10;
  });
}

function getFailingGrades(grades) {
  // TODO: return all failing grades (9 and below)
  return grades.filter(function(grade) {
      return grade <= 9;
  });
}

function getRaisedGrades(grades) {
  // TODO: return all the grades raised by 1 (no grade should exceed 20)
  return grades.map(function(grade) {
      grade++;
      return grade <= 20? grade : 20;
  });
}

function printStatistics(grades) {
  console.log("\n*** Statistics ***\n")
  console.log(`Number of tests taken: ${getNumberOfGrades(grades)};`);
  console.log(`Sum of grades: ${getSumGrades(grades)};`);
  console.log(`Average grade: ${getAverageValue(grades)};`);
  console.log(`Passing grades: ${getPassingGrades(grades)};`);
  console.log(`Failing grades: ${getFailingGrades(grades)};`);
  console.log(`Raised grades: ${getRaisedGrades(grades)}.`);
}

function main() {

  console.log("*** CLASSROOM ***\n");

  const grades = [12, 19, 10, 4, 15, 9];
  let grade;

  do {
    grade = readlineSync.questionInt("- Enter the grade (the grade must be between 0 and 20 (including)): ");
    if(grade < 0 || grade > 20) {
      console.log("\n-> Invalid grade! Enter a grade between 0 and 20 (including)\n");
    }
  } while(grade < 0 || grade > 20);

  grades.push(grade);

  printStatistics(grades);

}

main();