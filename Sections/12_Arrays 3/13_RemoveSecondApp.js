/**
 * Remove Second App
 * 
 * Complete the function 'removeSecondApp' such that it removes the second element from the 'apps' array it receives and
 * returns the new array (which should not contain the item that was removed).
 * 
 */

'use strict';

const removeSecondApp = apps => {
  apps.splice(1, 1);
  return apps;
}

// Sample usage
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
console.log(removeSecondApp(apps)); // ["Calculator", "Chrome", "Firefox"]