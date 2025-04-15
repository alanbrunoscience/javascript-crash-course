/**
 * Adding an element
 * 
 * - You can add an element to the end of an array using the .push() method.
 */

const numbers = [10, 8, 13, 15];
console.log(numbers);

console.log(numbers.push(20)); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];

/**
 * Array.push() returns the new length of the array.
 * 
 * - As you can see, numbers.push(20) returns 5 which is the length of the array. This is often confusing for a lot of 
 * developers which is why we're highlighting it here. .push() will add an item to the array but also return the new length 
 * of the array (after the push has been made).
 */