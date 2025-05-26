// Using .reduce

'use strict';

numbers = [10, 20, 30];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

// The '.reduce' example can be written on one line using implicit return:

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum) // 60