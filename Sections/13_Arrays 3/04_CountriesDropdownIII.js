/**
 * Countries dropdown III
 * 
 * - This is the same challenge as before. However, try solving it using the trick you learned in the previous lesson (though, you are not obliged).
 * 
 * - Complete the function getDropdown such that it returns the following HTML that will fill the existing <select></select> element. The HTML that's 
 * returned should look like the following:
 * 
 * 1. It should start with: <option value="">Please select</option>
 * 
 * 2. Then, for every country you should have the <option> for that. For example, for the country "Netherlands", you should have the following 
 * <option value="netherlands">Netherlands</option>
 * 
 * - Notice how the value contains the country name in lower case. The remaining countries will need to show up as well following the same criteria.
 */

export const getDropdown = (countries) => {
  let html = '<option value="">Please select</option>\n';

  html += `${countries.map(country => `<option value="${country.toLowerCase()}">${country}</option>`).join("\n")}`;

  return html;
}