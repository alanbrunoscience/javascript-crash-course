/**
 * Nutrition table IV
 * 
 * Complete the function 'renderTableRows' such that it returns the following HTML:
 * 
 * <tr>
 *  <td>label here</td>
 *  <td>value here</td>
 * </tr>
 * 
 * for every row that it receives in its rows parameter. The rows parameters looks like the following:
 * 
 * [["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]
 * 
 * Try to use the new technique you just learned to return the HTML string (though, you are not obliged).
 * 
 */

'use strict';

export const renderTableRows = rows => {
  const html = rows.map(row => `<tr>\n\t<td>${row[0]}</td>\n\t<td>${row[1]}</td>\n</tr>`).join("\n");
  return html;
}