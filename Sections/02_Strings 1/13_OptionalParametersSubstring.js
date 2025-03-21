/**
 * Optional parameters
 * 
 * - The indexEnd parameter is optional, which means you can pass the indexStart and it'll assume the indexEnd to be the same as the string length. Here's an example:
 * 
 */

const language = "JavaScript";

console.log(language.substring(4)); // "Script"

// It assumed that the indexEnd is the length of the string (10 in this example).