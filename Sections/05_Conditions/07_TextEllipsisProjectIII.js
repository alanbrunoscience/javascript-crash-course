/**
 * Text Ellipsis Project III 
 * 
 * - Complete the function getDescription such that it returns the first 10 characters of the 
 * text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 
 * 3 times: ...
 * 
 * - However, whenever the text is 10 characters or less, the ellipsis should not be added 
 * because the text is not being trimmed!
 * 
 * - There are multiple ways to solve this challenge. Take your time and make as many mistakes 
 * as possible ;) And make sure to try it in the browser tab.
 * 
 */

const readlineSync = require("readline-sync");

function getDescription(text) {
  if(text.length <= 10) {
    return text;
  }
  return text.substring(0, 10) + "...";
}

function main() {
  const text = readlineSync.question("Enter your text: ");
  console.log(getDescription(text));
}

main();

module.exports = { getDescription };