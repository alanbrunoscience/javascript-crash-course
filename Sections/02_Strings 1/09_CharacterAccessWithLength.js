/**
 * Combining Character Access With Length
 * 
 * → You can also combine the character access with the '.length' property. So using the same 
 * 'language' variable, here's how you get the second to last character from it.
 * 
 */

'use strict';

const language = "JavaScript";

console.log(language[ language.length - 2 ]); // "p" because it's the second to last character from "JavaScript"

/**
 * → Note that 'language[ language.length ]' will be undefined because character access starts at 0. So for a
 * string of 9 characters, 8 is the position of the last character.
 * 
 */
 