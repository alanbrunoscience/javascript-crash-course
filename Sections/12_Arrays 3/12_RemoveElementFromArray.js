/**
 * Remove element from array
 * 
 * Complete the function 'removeFirstApp' such that it removes the first element of the apps array it receives and returns 
 * the new array (which should not contain the item that was removed).
 * 
 */

'use strict';

const removeFirstApp = apps => {
  apps.splice(0, 1);
  return apps;
}

// Or
// const removeFirstApp = apps => apps.splice(1);

// Or
// const removeFirstApp = apps => {
//   return apps.splice(1);
// }

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]