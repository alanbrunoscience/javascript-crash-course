/**
 * Nutrition table III
 * 
 * Complete the function renderTableRow such that it returns the following HTML:
 * 
 * <tr>
 *   <td>TITLE</td>
 *   <td>VALUEg</td>
 * </tr>
 * 
 * Notice how you need to add the g next to the VALUE (g stands for grams).
 * 
 * You will need to replace the TITLE and the VALUE. The function receives a details parameter which is an object. 
 * Use console.log() to visualize how it looks like.
 * 
 */

'use strict';

export function renderTableRow(details) {
  return `<tr>
      <td>${details.title}</td>
      <td>${details.value}g</td>
  </tr>`;
}