/**
 * Weather I
 * 
 * - Once we learn about the Fetch API, you will be able to write the fetch call to a (demo) weather API!
 * 
 * - For this challenge, we're already calling the weather API for you in the index.js. You have to complete the 
 * following functions in weather.js:
 * 
 * -> getCountry which returns the country for which we're showing the weather;
 * -> getIcon which returns the icon;
 * -> getTemperature which returns the temperature.
 * 
 * - Note that these 3 functions receive a data object which is a snapshot of a response coming from a real API 
 * (weatherstack.com).
 * 
 * - You cannot solve this challenge without starting with a console.log(data) in every function. You have to explore 
 * the object and see where you can get the property that you're looking for.
 * 
 * - Oh, and, we've disabled the auto-complete so that you can figure it out yourself ;) Good luck!
 */

export function getCountry(data) {
  console.log(data.location.country);
  return data.location.country;
}

export function getIcon(data) {
  console.log(data.current.weather_icons);
  return data.current.weather_icons[0];
}

export function getTemperature(data) {
  console.log(data.current.temperature);
  return data.current.temperature;
}