/**
 * .at(index) method
 * 
 * You can also use the .at(index) method, which accepts negative indices making it easier to find the last element of the array. 
 * Negative indices count back from the last element of the array. Here are some examples with .at():
 * 
 */

'use strict';

const users = ["Sam", "Alex", "Charley", "Blane", "Crane"];

console.log(users.at(0)); // "Sam"
console.log(users.at(1)); // "Alex"
console.log(users.at(-1)); // "Crane"
console.log(users.at(-2)); // "Blane"
