/**
 * Visualize reduce sum
 * 
 * There are no tasks and no tests in this challenge. All you have to do is visualize in the console the value of 'total', 
 * 'current', and 'finally' the 'sum'. Notice how:
 * 
 * 1. The value of 'total' starts at 0 (which is given by the 'initialValue');
 * 2. The value of 'current' a single item of the array for every iteration;
 * 3. The value of 'total' is the result of the last run of the reducer (the ongoing 'sum').
 * 
 * Feel free to change the numbers in the grades array and check the output in the console to better understand how '.reduce()' works.
 * 
 */

'use strict';

let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
    console.log(`\n- Total is ${total}`);
    console.log(`- Current is ${current}`);
    console.log("\n---------------");
    return total + current;
}, 0);

console.log(`\n-> Sum is ${sum}`);
