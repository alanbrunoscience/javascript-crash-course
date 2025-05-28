/**
 * Reading dynamic property
 * 
 * Back in the first Objects chapter, we saw that we can use the dot notation to read a property on an object. For example:
 * 
 */

'use strict';

const user = {
  id: 1,
  name: "Sam Green"
};

console.log(user.id); // 1

// Now, what if the name of the property that you wanted to read was stored in a variable? For example:

const key = "id"; // the name of the property that we wanted to access on the user object

// ❌ this does NOT work

console.log(user.key); // undefined

/**
 * We cannot use the dot syntax here because the property is dynamic. When you write user.key, JavaScript will then look for a property
 * called key which is not the case here. Instead, we need to get the value of the variable key, which is "id".
 * 
 * For that, you have to use the square brackets as follows:
 * 
 */

const user2 = {
  id: 1,
  name: "Sam Green",
  age: 20
}

const key2 = "id";
console.log(user2[key2]); // 1

/**
 * This works because [key] will evaluate the expression inside the square brackets. In this case, key evaluates to "id". So we end
 * up reading the property id which returns 1 (because user.id is 1).
 * 
 * You're probably thinking that this is overcomplicated and we could have just accessed user.id. That's true, however, there are cases
 * where the key will be stored in a variable. For example, take the function below:
 * 
 */

const getValue = (user3, keyToRead) => {
  return user3[keyToRead];
}

// Sample usage
console.log(getValue({id: 2, name: "Sam"}, "name")); // Sam
console.log(getValue({id: 2, name: "Sam"}, "id")); // 2

/**
 * In this case, getValue accepts an object user and then the keyToRead. So, to be able to implement the function, we had to access the
 * property dynamically with user[keyToRead]. This allows the function to be dynamic and accept any key on the user object, and its 
 * value will be returned!
 * 
 * Don't worry if the concept is still not clear, this is a tough one. We'll have a challenge with some DOM with it so that you can 
 * better visualize it.
 * 
 */


