/**
 * String .trim()
 * 
 * This one is especially useful when working with the DOM (we'll learn about the DOM in chapter 48), and you expect the
 * user to enter some text. Users will sometimes, by accident, enter an empty space character at the beginning or the 
 * end of a text box.
 * 
 * Say, for example, you ask the user for their name, and they enter " Sam" instead of "Sam". This could cause issues 
 * in some scenarios (for example, email addresses).
 * 
 * The solution for that is using the .trim() method which removes all leading (at the beginning) and trailing (at the 
 * end) space characters.
 * 
 */

'use strict';

const name = "   Sam Blue   ";
console.log(name);
console.log(name.trim()); // "Sam Blue" (no spaces)