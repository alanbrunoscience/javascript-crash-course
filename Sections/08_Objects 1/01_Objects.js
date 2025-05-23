/**
 * Objects
 * 
 * An object is a data type that allows you to group several variables together into one variable that contains keys 
 * and values. This is often used to represent or describe an entity. For example, a person, a user, a product, etc.
 * 
 */

'use strict';

const user = {
  id: 1,
  firstName: "Sam",
  lastName: "Doe",
  age: 20
};

// In JavaScript, the recommended convention is camelCase for property names (for example firstName instead of 
// first_name).

// Read the value of a property
console.log(user.id); // 1
console.log(user.firstName); // "Sam"
console.log(user.isAdmin); // undefined (property does not exist)

// Updating property value
console.log(user.lastName); // Doe
console.log(user.age); // 20

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // { id: 1, firstName: 'Sam', lastName: 'Blue', age: 21 }

// ⚠️ You are able to update the property value of an object defined by const because const DOES NOT mean that 
// the variable is a constant, it just means that you cannot re-assign it. Thus, the variable is always an object, 
// but its content (properties) can change.