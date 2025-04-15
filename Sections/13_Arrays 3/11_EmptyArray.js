/**
 * Empty Array
 * 
 * - Complete the function 'resetApps' such that it empties the 'apps' array it receives as a parameter.
 */

"use strict"

const resetApps = apps => apps.splice(0);

// Or
// const resetApps = apps => {
//   apps.length = 0;
// }

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(resetApps(apps));
