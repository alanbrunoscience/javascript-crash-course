/**
 * @param {string} name
 */
function getLastCharacter(name) {
  
  return name.at(-1);
  // return name[name.length - 1];

}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"