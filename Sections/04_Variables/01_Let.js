/**
 * Let
 * 
 * → The first time you define a variable, you have to prefix it with 'let ='. Let's take an example:
 * 
 */

'use strict';

let name = "Sam";
console.log(name);

/**
 * 
 * → This defines a variable called 'name' with a value of 'Sam'. The next time you'd like to use that variable, you
 * reference it by its name (you only use the 'let' keyword for declaration). Variables defined with 'let', can be
 * re-assigned later on:
 * 
 */

let language = "C++";
console.log(language);

language = "JavaScript";
console.log(language);

// Another example

let sum = 0;
console.log(sum);

sum += 1;
console.log(sum);

// This is especially useful when you want to create a variable that needs to be incremented/decremented (such as a counter).