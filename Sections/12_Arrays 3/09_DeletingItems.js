/**
 * Deleting items
 * 
 * Say you've got an array and you'd like to empty it; you can do that by setting its length to 0:
 * 
 */

'use strict';

const items = ["Pen", "Paper"];
items.length = 0;

console.log(items);

/**
 * This works even though we're using 'const' because we're not re-assigning items but rather changing its length to 0, 
 * which ends up removing all the items inside of it. The 'const' here guarantees that we will always have an array 
 * (but its content can change).
 * 
 */