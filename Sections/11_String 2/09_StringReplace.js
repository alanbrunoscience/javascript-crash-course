/**
 * String.replace(search, replace)
 * 
 * - The '.replace(search, replace)' method returns a new string where the first occurrence of the search parameter you 
 * provide is replaced by the replace parameter, for example:
 */

const message = "You are welcome.";

console.log(message.replace(' ', '_')); // "You_are welcome."; (only the first occurrence has been replaced)

console.log(message); // "You are welcome." (original string is not changed)

// In this example, we search for the " " (space character) and replace it with an "_" (underscore character). Notice how it only replaces
// the first match.

// If you'd like to replace all the occurrences, then you can use the .replaceAll() method explained below. It is also possible to pass a
// regular expression as a first parameter (which can be used to match more than one item. Though, generally, using .replaceAll() is easier).