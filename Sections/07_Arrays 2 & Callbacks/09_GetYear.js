/**
 * Get Year
 * 
 * Complete the function 'getYear' such that it returns the 'searchYear' (passed as 2nd parameter) when it's found in
 * the array. Otherwise, it should return 'undefined'.
 * 
 * Take a look at the sample usage and expected output to better understand how the function should work.
 * 
 */

'use strict';

function getYear(years, searchYear) {
  return years.find(function(year) {
    return year === searchYear;
  });
}

console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined