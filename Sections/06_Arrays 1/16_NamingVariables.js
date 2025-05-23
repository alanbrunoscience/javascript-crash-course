/**
 * Naming variables
 * 
 * Naming variables with a clear name makes it much easier for you and others to understand the code. This is especially true with
 * iteration.
 * 
 * Thus, it's always a good idea to use the plural for the array and singular for the item of the array. Here are some examples:
 * 
 * grades => item is grade;
 * people => item is person.
 * 
 * It may sound like it's a minor tip, but it makes a big difference! 💡
 * 
 * Here is a code example based on the above:
 * 
 */

'use strict';

const grades = [10, 14, 15]; // array (plural)

grades.forEach(function(grade) { // array item (singular)
  console.log(grade);
});

const people = ["Sam", "Alex"]; // array (plural)

people.forEach(function(person) { // array item (singular)
  console.log(person);
});