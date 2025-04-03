/**
 * Default parameters
 * 
 * - Before we learn about arrow functions, let's take a look at a small but useful feature.
 */

function addOne(number) {
  return number + 1;
}

console.log(addOne(2)); // 3
console.log(addOne(5)); // 6
console.log(addOne()); // NaN

// The number parameter will receive a value of undefined so the function will return undefined + 1 which results in 
// NaN.

/**
 * ⚠️ Parameters vs Arguments
 * 
 * - A parameter is a variable in a function definition. When a function is called, the arguments are the data you 
 * pass into the method's parameters.
 */


