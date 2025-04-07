/**
 * Positive temperatures II
 * 
 * - Complete the function 'getPositiveTemperatures' such that it returns an array containing 
 * the positive temperatures (the temperatures that are above 0).
 * 
 * - Use an arrow function (implicit return is optional).
 */

const getPositiveTemperatures = temperatures => temperatures.filter(temperature => temperature > 0);

// Or
// const getPositiveTemperatures = temperatures => {
//   return temperatures.filter(temperature  => temperature > 0);
// }

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
