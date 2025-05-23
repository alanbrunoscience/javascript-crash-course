/**
 * String.replaceAll(search, replace)
 * 
 * This method works like the one above, except that it will replace 'all occurrences'.
 * 
 */

'use strict';

const message = "You are welcome.";

console.log(message.replaceAll(' ', '_')); // "You_are_welcome";

console.log(message); // "You are welcome" (original string is not changed)