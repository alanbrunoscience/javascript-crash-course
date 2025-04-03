/**
 * Positive temperatures
 * 
 * - Using an arrow function, complete the function getPositiveTemperatures such that it returns an array containing 
 * the positive temperatures (the temperatures that are above 0).
 */

const getPositiveTemperatures = (temperatures) => {
  return temperatures.filter(temperature => {
    return temperature >= 0;
  });
}

console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]