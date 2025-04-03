/**
 * Default parameters
 * 
 * - Default parameters allow you to give a default value for one or more parameters that have not been provided when the 
 * function is called. Let's fix the example above and default the 'number' to 0:
 */

function addOne(number = 0) {
  return number + 1;
}

console.log(addOne(2)); // 3
console.log(addOne(5)); // 6
console.log(addOne()); // 1

/**
 * - When you call the function addOne() without any arguments, it'll use the default value you defined in the function 
 * signature (number = 0) which is why we get back 1 from the function. See how we were able to prevent NaN without adding 
 * an if condition?
 * 
 * - Also, notice how addOne(2) still works as before. So, when you do provide an argument, the default parameter is ignored.
 * 
 * - Here's one more example:
 */

function welcomeUser(name = "user") {
  return `Hello ${name}`;
}

console.log(welcomeUser("Sam")); // "Hello Sam"
console.log(welcomeUser()); // "Hello user"