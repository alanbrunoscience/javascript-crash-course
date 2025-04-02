/**
 * Voters stats API
 * 
 * - This project uses the fetch API (that you're going to learn about later in this course) to get the stats of citizens in a city. To
 * complete this project, you need to return the number of voters in the city selected by the user.
 * 
 * - Go to the browser tab and select Amsterdam or Berlin. This will get the age of citizens in the selected city (not real data) using 
 * an API. This data is received by a function called getVotersCount.
 * 
 * - Implement the getVotersCount function such that it returns the number of citizens that are allowed to vote (must be 18 years or older).
 */

"use strict"

const readlineSync = require("readline-sync");

function getVotersCount(ages) {
  return ages.filter(function (age) {
    return age >= 18;
  }).length;
}

function main() {
  const amsterdam = [10, 14, 75, 52, 75, 15, 15, 13, 34, 62, 46, 64, 23, 72, 73, 82, 74, 23, 46, 43, 62, 14, 36, 23];
  const berlin = [15, 72, 45, 73, 72, 83, 36, 67, 26, 36, 25, 63, 22, 23, 52, 52, 25, 18];  

  console.log(`${getVotersCount(amsterdam)} citizens can vote in Amsterdam;`);
  console.log(`${getVotersCount(berlin)} citizens can vote in Berlin.`);
}

main();