const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
  return number > 10;
});

console.log(numbersAboveTen); // [14, 11]

// The .filter(callback) can be rewritten as:

const numbersAboveTen2 = numbers.filter(number => {
  return number > 10;
});

console.log(numbersAboveTen2);