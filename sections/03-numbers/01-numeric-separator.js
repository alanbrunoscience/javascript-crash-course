'use strict';

/**
 * Numeric Separator (_)
 *
 * → You can represent larger numbers clearer, if you wish, with the numeric separator (_);
 *
 * → The '_' is taken out by JavaScript from the number. So, "10_00" is equivalent to 1000.
 *
 */

let nb = 1_000; // equivalent to 1000
let nb2 = 1_000_000; // 1000000 (1 million)
let nb3 = 10_00; // equivalent to 1000

console.log(nb); // 1000
console.log(nb2); // 1000000
console.log(nb3); // 1000