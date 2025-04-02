/**
 * How does JavaScript know that every item from the 'numbers' array becomes 'number' in the callback argument?
 * 
 * - The answer to that is that it doesn't know! JavaScript will take your callback and pass the item of the array as the 'first parameter'
 * to your callback function. However, you should use the 'plural -> singular' naming convention as a good practice. It will make your life
 * easier:
 */

const years = [2000, 2008, 2010, 2020, 2023];

const yearsAbove2009 = years.filter(function (year) {
  return year >= 2010;
});

console.log(yearsAbove2009);

// The code below can be read in plain English as 'Filter the years where the year is 2010' and above.