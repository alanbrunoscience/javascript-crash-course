/**
 * Feels Like
 * 
 * - Complete the function getWeather such that it returns the string:
 * 
 * -> 'It's currently X degrees in Y'.
 * 
 * - Where X is replaced by the value and Y is replaced by the city name. These values are provided as a city parameter
 * which is an object.
 */

function getWeather(city) {
  return `It's currently ${city.value} degrees in ${city.name}`;
}

console.log(getWeather({name: "Amsterdam", value: 3})); // "It's currently 3 degrees in Amsterdam"
console.log(getWeather({name: "Brasilia", value: 24})); // "It's currently 24 degrees in Brasilia"