/**
 * Increment Age
 * 
 * Complete the function 'incrementAge' such that it returns the person object with the age incremented (add 1 to the 
 * existing value).
 * 
 * Note that we have provided only one sample usage in this challenge, but your code should work for any similar object
 * that we test it with.
 * 
 */

'use strict';

function incrementAge(person) {
  person.age += 1;
  return person;
}

const person = {
    firstName: "Jennifer",
    lastName: "Doe",
    age: 18
}
console.log(incrementAge(person)); // {firstName: "Jennifer", lastName: "Doe", age: 19}

