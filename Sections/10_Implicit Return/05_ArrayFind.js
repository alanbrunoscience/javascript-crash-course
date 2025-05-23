// Array Find (callback)

'use strict';

const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});

console.log(result); // "Alex"

// The .find(callback) can be re-written as follows:

const result2 = names.find(name => name === "Alex");

console.log(result2);

// This can be read as: From the 'names' array, find the 'name' that is equal to the string "Alex".