// Using .forEach

'use strict';

const sumNumbers = (numbers) => {
  let sum = 0;

  numbers.forEach(number => {
    sum += number;
  });

  return sum;

}

numbers = [10, 20, 30];

console.log(sumNumbers(numbers)) // 60