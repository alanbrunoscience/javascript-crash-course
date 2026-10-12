'use strict';

/**
 * Optional Parameters
 *
 * → The 'endIndex' parameter is optional, which means you can pass the 'startIndex' and
 * it'll assume the 'endIndex' to be the same as the string length. Here's an example:
 *
 */

let language = "JavaScript";

console.log(language.substring(4)); // "Script"

/**
 * Legacy note:
 *
 * → Do not use the '.substr()' method as it's deprecated and works differently. Always use the
 * '.substring()' method.
 *
 */