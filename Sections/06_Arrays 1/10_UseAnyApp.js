/**
 * Use any app 
 * 
 * Complete the function such that the app variable is added to the apps array. Then, return the apps array.
 * 
 */

'use strict';

function useApp(apps, app) {
  apps.push(app);
  return apps;
}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]
