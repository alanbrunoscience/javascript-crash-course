/**
 * String .split(separator)
 * 
 * The .split(separator) method divides the string into an array of substrings based on the separator you provide. For 
 * example:
 * 
 */

'use strict';

let apps = "Calculator, Phone, Contacts";
let appsArray = apps.split(',');
console.log(appsArray); // [ 'Calculator', ' Phone', ' Contacts' ]

// This is especially useful to convert from CSV (Comma Separated Values) back to an array. Reminder that the opposite
// of String.split(separator) would be Array.join(glue).