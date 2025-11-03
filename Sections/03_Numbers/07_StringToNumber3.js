/**
 * → The 'Number.parseInt()' method will try to convert the string it receives into a number. As you can see below,
 * it most often works when the string starts with a number and ends with non-numeric values:
 */

'use strict';

console.log(Number.parseInt("123abc", 10)); // 123
console.log(Number.parseInt("5 meters", 10)); // 5