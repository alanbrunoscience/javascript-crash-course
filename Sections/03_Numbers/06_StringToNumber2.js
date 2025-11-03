/**
 * Use cases for converting a string to a number
 * 
 * → There are several reasons why you'd like to convert a string to a number, but the most common one is when the number is 
 * entered by the user in a text box or the number is being read from the DOM (which is explained later on).
 * 
 * → As you will see in the next challenge, these values will always be a string (even if the user writes a number). Thus, it
 * is your job to convert it to a number. If you forget to convert a string to a number, you will see that the intended 
 * addition is behaving like concatenation:
 * 
 */

'use strict';

let a = 10;
let b = "20"; // we forgot to convert it to a number
console.log(a + b); // "1020" (concatenation instead of sum)