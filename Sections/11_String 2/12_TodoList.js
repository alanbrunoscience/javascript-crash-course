/**
 * Todo list
 * 
 * Complete the function getCountTodos such that it returns the number of todos in the CSV string it receives.
 * 
 * Note: CSV means Comma Separated Values. Here's an example of a CSV string: "first item, second item".
 * 
 */

'use strict';

const getCountTodos = todos => todos.split(',').length;

// Or
// const getCountTodos = todos => {
//   return todos.split(',').length;
// }

// Sample usage - do not modify
console.log(getCountTodos("Laundry, Wash dishes, Clean table")); // 3
console.log(getCountTodos("Feed cat, Degrease bike chain")); // 2