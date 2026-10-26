'use strict';

/**
 * Use cases for converting a string to a number
 *
 * → There are several reasons why you'd like to convert a string to a number, but the most common
 * one is when the number is entered by the user in a text box or the number is being read from the
 * DOM (which is explained later on).
 *
 * → As you will see, these values will always be a string (even if the user writes a number). Thus,
 * it is your job to convert it to a number.
 *
 * → If you forget to convert a string to a number, you will see that the intended addition is behaving
 * like concatenation:
 *
 */

let a = 10;
let b = "20"; // we forgot to convert it to a number
console.log(a + b); // "1020" (concatenation instead of sum)

/**
 * The "Number.parseInt()" method will try to convert the string it receives into a number. As you
 * can see below, it most often works when the string starts with a number and ends with
 * non-numeric values:
 *
 */

console.log(Number.parseInt("123abc", 10)); // 123
console.log(Number.parseInt("5 meters", 10)); // 5