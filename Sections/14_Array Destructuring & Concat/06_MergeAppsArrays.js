/**
 * Merge apps arrays
 * 
 * - Complete the function 'getApps' such that it returns a new array containing the items from both parameters it
 * receives.
 */

const getApps = (apps1, apps2) => {
  return [...apps1, ...apps2];
}

// Sample usage - do not modify
console.log(getApps(["Calculator", "Whatsapp"], ["Chrome", "Firefox"])); // ["Calculator", "Whatsapp", "Chrome", "Firefox"]