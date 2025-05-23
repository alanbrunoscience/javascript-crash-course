/**
 * Array includes(item)
 * 
 * The array .includes(item) method is one of the simplest array methods as it takes an item rather than a callback 
 * and returns 'true' when that item exists in the array and 'false' otherwise. Here's an example:
 * 
 */

'use strict';

const groceries = ["Apple", "Peach", "Tomato"];

console.log(groceries.includes("Tomato")); // true
console.log(groceries.includes("Bread")); // false