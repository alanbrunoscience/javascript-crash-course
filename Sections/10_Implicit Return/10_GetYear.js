/**
 * Get year
 * 
 * - Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.
 * 
 * - Take a look at the sample usage and expected output to better understand how the function should work. Use an arrow function (implicit return is optional).
 */

const getYear = (years, searchYear) => years.find(year => year === searchYear);

// Or
// const getYear = (years, searchYear) => {
//   return years.find(year => year === searchYear);
// }

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
