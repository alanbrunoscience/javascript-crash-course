/**
 * Get last app
 * 
 * Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.
 * 
 */

'use strict';

function getLastApp(apps) {
  return apps.at(-1);
  // alternatively
  // return apps[apps.length - 1];
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"
