'use strict';

/**
 * Combining it with length
 *
 * → You can also combine the character access with the '.length' property;
 *
 * → So, using the same 'language' variable, here's how you get the second-to-last character
 * from it:
 *
 */

let language = "JavaScript";

console.log(language[language.length - 2]); // 'p' (second-to-last character)

/**
 * → Note that 'language[language.length]' will be 'undefined' because character access starts at 0.
 * So, for a string of 9 characters, 8 is the position of the last character.
 *
 */
