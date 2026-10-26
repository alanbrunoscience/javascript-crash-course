'use strict';

/**
 * Get Box Width
 *
 * → Complete the function "getBoxWidth" such that it returns the width (as a number) from the string it receives.
 *
 * → Note that the string it receives looks like "50px" or "100px" (which is used in CSS) whereas the functions should
 * return a number from these strings.
 *
 */

function getBoxWidth(value) {
  return Number.parseInt(value, 10);
}

let width1 = "200px";
let width2 = "150px";

console.log(`First box width: ${getBoxWidth(width1)}`); // 200
console.log(`Second box width: ${getBoxWidth(width2)}`); // 150