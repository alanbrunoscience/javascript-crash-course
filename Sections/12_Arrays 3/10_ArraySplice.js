/**
 * Array.splice()
 * 
 * You can also delete specific items from an array using the 'splice(start[, deleteCount])' method.
 * 
 * ⚠️ Do not confuse 'splice' with another method called 'slice'.
 * 
 * Did you notice the '[, deleteCount]' syntax? You will often see this syntax in documentation, which means
 * that the deleteCount parameter is OPTIONAL.
 * 
 * The '.splice(start[, deleteCount])' method removes items from the array starting from the start index that
 * you specify. If NO deleteCount is provided, it will remove ALL the remaining items as of the start index.
 * 
 * When you specify a 'deleteCount', it will remove as many items as you provided in the 'deleteCount' from the 
 * start index. So, this parameter specifies the NUMBERS OF ITEMS to delete.
 * 
 * --------------------------------------------------------------------------------------------------------------
 * 
 * The definition is more complicated than the example, so we recommend you take a look at the examples below:
 * 
 * 1. To delete the 1st element of an array, you call '.splice(0, 1)';
 * 2. To delete 3 elements starting from the 2nd position, you call '.splice(1, 3)';
 * 3. If you call '.splice(1)', then it will remove all the items starting from the 2nd position (index 1).
 * 
 * ⚠️ Try to always specify the 2nd argument for splice to avoid unexpectedly removing more items than necessary.
 * 
 */

'use strict';

const items = ['Pen', 'Paper', 'Staples'];
const deletedItem = items.splice(0, 1); // Removes one element at index 0

console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]

// Notice how the '.splice' method returns an array of the element(s) removed.