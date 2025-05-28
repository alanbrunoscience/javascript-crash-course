'use strict';

/**
 * Object methods
 * 
 * In this lesson, we'll learn about 2 object methods. But first, let's take a look at what happens when you access a property
 * that does not exist on an object.
 * 
 */

const person = {
  id: 1,
  firstName: "Sam"
};

console.log(person.id); // 1
console.log(person.firstname); // undefined (firstname instead of firstName)
console.log(person.age); // undefined

/**
 * Notice how when we access a property that does not exist (such as age or the misspelled firstname), then we get undefined.
 * 
 * This is not an error but this may often lead to an error if you try to access another property or method on it. For example:
 * 
 */

console.log(person.age.toUpperCase()); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined

/**
 * This is one of the most common errors that you will see in JavaScript. TypeScript does a great job at preventing these kind
 * of errors, though it comes with its own overhead.
 * 
 * It's important to be able to read this error message and understand that the issue is not .toUpperCase() but instead, the 
 * expression that came before it person.age. That's because you end up calling undefined.toUpperCase() which does not exist.
 * 
 */

// =============================================================================================================================

/**
 * [object Object]
 * 
 * Another note worth mentioning is that when you see '[object Object]' it means that the '.toString()' method has been 
 * automatically called on an object which will result in '[object Object]'.
 * 
 * So if you see '[object Object]', it means you tried to use an object in a context that expects a string. For example:
 * 
 */

console.log(`Hello ${person}`); // Hello [object Object]

// In this case, we should probably replace ${person} with ${person.firstName}.

// =============================================================================================================================

/**
 * Object.values()
 * 
 * In the previous lesson, we saw that we can access the values of an object by looping through the keys and then dynamically 
 * accessing the keys. This works if you need to access both the keys and the values.
 * 
 * However, if you only need to access the values, then you can use Object.values() which returns an array of the values:
 * 
 */

const user = {
  id: 1,
  name: "Sam Green",
  age: 20
};

const values = Object.values(user);
console.log(values); // [ 1, 'Sam Green', 20 ]

// =============================================================================================================================

/**
 * Object.entries()
 * 
 * The Object.entries() method returns an array of arrays representing every key/value pair. Let's visualize it:
 * 
 */

const entries = Object.entries(user);

console.log(entries); // [ [ 'id', 1 ], [ 'name', 'Sam Green' ], [ 'age', 20 ] ]

// This is especially useful in combination with array destructuring and for..in (which is covered in a later chapter).

// =============================================================================================================================

/**
 * Recap
 * 
 * - When you access a property that does not exist on an object, you will get 'undefined';
 * 
 * - When you try to access a property or call a method on 'undefined' (or an expression that evaluates to 'undefined'), you 
 * will get an error 'Uncaught TypeError: Cannot read property 'X' of undefined';
 * 
 * - When you see '[object Object]', it means that an object was used in a context that was expecting a string. So the 
 * '.toString()' method has been called automatically on the object;
 * 
 * - The 'Object.values()' method returns an array of the values of an object;
 * 
 * - The 'Object.entries()' method returns an array of arrays representing every key/value pair;
 * 
 * - We will revisit 'Object.entries()' later in this course.
 * 
 */