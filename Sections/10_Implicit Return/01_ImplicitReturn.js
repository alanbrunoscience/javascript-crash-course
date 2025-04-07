/**
 * Implicit return
 * 
 * - When you forget to write 'return' in a function in JavaScript, you get an implicit 'return undefined'. The word implicit here means
 * that it is inferred but not specifically expressed. Meaning that there was no 'return undefined' but we end up getting 'undefined' as
 * a result. For example:
 */

const sum = (a, b) => {
  a + b;
}

console.log(sum(1, 3)); // undefined

// As you can see, 'sum(1, 3)' returns 'undefined' because we did not have a 'return' keyword inside the function body.

// this work 👍🏻 (implicit return)
const sum2 = (a, b) => a + b;

console.log(sum2(1, 3)); // 4

/**
 * ⚠️ How Implicit Return Works
 * 
 * - For implicit return to work, you must have all of the following conditions:
 * 
 * 1. Your function must be an arrow function;
 * 2. The function body must be only one statement. This means you must remove the curly braces.
 * 3. You must remove the return keyword when the function body is one statement.
 * 
 * - When all these conditions are met, the arrow function will implicitly return the result of its
 * function body (which is only one line). Let's take another example:
 */

const isLegal = (age) => {
  return age >= 18;
}

/**
 * - To make use of implicit return, you need to:
 * 
 * 1. Removing the curly braces;
 * 2. Removing the 'return' keyword.
 */

const isLegal2 = (age) => age >= 18;

// ⚠️ Only use implicit return when the function body is one line and short. Never sacrifice code readability and clarity in
// order to use a certain feature.

// Implicit return only works when there's single statement inside the function (and the curly braces and return keyword are omitted).

/**
 * Going further
 * 
 * - As mentioned in the previous chapter, when you have only one parameter, you are able to drop the parentheses around the parameter. The code 
 * above becomes: 
 */

const isLegal3 = age => age >= 18;

// This is the shortest possible (yet clear) way you can write this function.