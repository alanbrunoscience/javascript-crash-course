/**
 * Classroom Project II
 * 
 * This is the classroom project but you have to use arrow functions (optional: implicit return)! You can enter grades
 * in the browser tab and add them to the app, which will show you various statistics about the classroom. For example, 
 * you will see the average grade, all the failing grades, etc.
 * 
 * Each function has a comment describing what it should return, but you can also find them below:
 * 
 * 1. 'getNumberOfGrades' should return the number of grades;
 * 2. 'getSumGrades' should return the sum of all the grades;
 * 3. 'getAverageValue' should return the average value of all grades (sum of all grades divided by the total number of
 * grades);
 * 4. 'getPassingGrades' should return all passing grades (10 and above);
 * 5. 'getFailingGrades' should return all failing grades (9 and below);
 * 6. 'getRaisedGrades' should return all the grades raised by 1 (grades should not exceed 20).
 * 
 */

'use strict';

export const getNumberOfGrades = grades => grades.length;

export const getSumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum;
}

export const getAverageValue = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum / grades.length;
}

export const getPassingGrades = grades => grades.filter(grade => grade >= 10);

export const getFailingGrades = grades => grades.filter(grade => grade < 10);

export const getRaisedGrades = grades => {
    return grades.map(grade => ++grade > 20 ? 20 : grade);
}
