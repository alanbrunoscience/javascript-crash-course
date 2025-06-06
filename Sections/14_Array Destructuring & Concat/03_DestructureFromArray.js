/**
 * Destructure from array
 * 
 * Complete the function 'getLocationString' by destructuring the 'location' param into 2 variables: 'lat' and 'lng'.
 * 
 */

'use strict';

const getLocationString = location => {
  //destructure into 2 variables: lat & lng
  const [lat, lng] = location;
  return `The latitude is ${lat} and the longitude is ${lng}`;
}

// Sample usage - do not modify
const location = [24.235235, 2.5734];
console.log(getLocationString(location)); // "The latitude is 24.235235 and the longitude is 2.5734"