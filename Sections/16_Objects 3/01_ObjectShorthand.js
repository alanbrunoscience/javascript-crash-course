'use strict';

/**
 * Object shorthand
 * 
 * A nifty feature in Objects is the object shorthand. Say you have a variable 'age', and you wanted to create an object with a 
 * key 'age' and its value is a variable 'age':
 * 
 */

const age = 18;
const person = {
  name: "John",
  age: age
};

console.log(person); // { name: 'John', age: 18 }

// That age: age is a bit redundant; thus, you're able to write it as follows:

const person2 = {
  name: "John",
  age
};

console.log(person2); // { name: 'John', age: 18 }

/**
 * Because the property name is the same as the name of the variable used as its value, then you can drop the : age so you're 
 * left only with age.
 * 
 * Here's another example:
 * 
 */

const isAdmin = false;
const darkMode = true;

const settings = {
  isAdmin,
  darkMode
};

console.log(settings); // { isAdmin: false, darkMode: true }

/**
 * Debugging tip
 * 
 * Object shorthand can be used as a very useful debugging tip. Let's say you've got the following code:
 * 
 */

const sum = (a, b) => {
  console.log(a); // 1
  console.log(b); // 3
  let total = a + b;
  console.log(total); // 4
  return total;
}

// Sample usage
sum(1, 3);

/**
 * There are several 'console.log' calls because we are trying to debug our code. However, it will be tough for us to map on the 
 * console which value corresponds to which 'console.log' call.
 * 
 * To fix that, you can wrap every variable inside the console.log call with '{}' so that the code becomes as follows:
 * 
 */

const sum2 = (a, b) => {
  console.log({a}); // {a: 1}
  console.log({b}); // {b: 3}
  let total = a + b;
  console.log({total}); // {total: 4}
  return total;
}

// Sample usage
sum2(1, 3);

/**
 * By wrapping every variable with {}, you are now using the object shorthand that you learned above. The benefit here is that,
 * instead of logging a, you are logging {a: a}.
 * 
 * So you will be able to see an object for every value and know the name of the variable that you were trying to log.
 * 
 * Don't worry if you don't understand this tip, as we'll have a challenge on it where you will be able to visualize it.
 * 
 */

/**
 * Recap
 * 
 * - Assuming a variable 'name', here's an example of object shorthand: 'const user = {name}';
 * 
 * - 'const user = {age}' is equivalent to 'const user = {age: age}';
 * 
 * - When you have several console.log calls, wrap the values with '{}' so that you use object shorthand. The benefit is that
 * you will be able to see the name of the variable that you were trying to log alongside its value.
 * 
 */





