/**
 * Object.keys()
 * 
 * The Object.keys(obj) method returns an array of all the keys in the obj that you provide. Note that we have Object here, which is a
 * global variable available in JavaScript. It is similar to Number on which we called Number.parseInt() before.
 * 
 * The Object global variable contains methods that are relevant to objects. One of them is the keys() which accepts any object. For 
 * example:
 * 
 */

'use strict';

const user = {
  id: 1,
  name: "Sam Green",
  age: 20
}

const keys = Object.keys(user);
console.log(keys); // [ 'id', 'name', 'age' ]

/**
 * Notice how it returns an array containing every single key from the user object.
 * 
 * Remember to pass the object whose keys you want into the .keys() method. It's often confusing for developers to see this Object (with a 
 * capital O in the beginning). You can remember it as if the name of the function is Object.keys() and then it receives whatever object 
 * you want as a parameter.
 * 
 */

/**
 * Putting it all together
 * 
 * Since Object.keys() returns an array, you can use it to loop through every key in the object and get its value dynamically:
 * 
 */

const settings = {
  theme: "Dark",
  version: "2.4.1",
  beta: false
};

const keys2 = Object.keys(settings);
console.log(keys2); // [ 'theme', 'version', 'beta' ]

keys2.forEach(key => {
  // log the value of every key dynamically
  console.log(settings[key]);
});

// Output
// Dark
// 2.4.1
// false

/**
 * Recap
 * 
 * - You cannot use the dot syntax when the property you're trying to read is stored in a variable or the result of an expression 
 * (dynamic);
 * 
 * - Instead, you should use square brackets with the name of the variable inside. For example [key];
 * 
 * - object[key] will evaluate the key expression first and then read the property based on its result;
 * 
 * - The Object.keys(obj) method returns an array of all the keys in the obj that you provide.
 * 
 */
