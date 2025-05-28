/**
 * Log values
 * 
 * Complete the function 'logValues' such that it logs (using console.log) every value in the course object it receives as a 
 * parameter.
 * 
 * For example, logValues({id: 3, course: "React Tutorial"}) should log 3 and "React Tutorial" to the console.
 * 
 */

'use strict';

const { Or } = require("typeorm");

const logValues = course => {
  Object.keys(course).forEach(key => console.log(course[key]));
}

// Or

// const logValues = course => {
//     Object.keys(course).forEach(key => {
//         console.log(course[key]);
//     });
// }

// Sample usage - do not modify
logValues({id: 1, name: "Learn JavaScript", year: 2021}); // should log (separately): 1, "Learn JavaScript" and 2021