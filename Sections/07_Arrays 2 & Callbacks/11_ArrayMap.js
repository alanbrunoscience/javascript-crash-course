/**
 * Array Map
 * 
 * - The .map(callback) method allows you to TRANSFORM AN ARRAY INTO ANOTHER ONE. Here are some commom examples:
 * 
 * -> [4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array;
 * 
 * -> ["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.
 * 
 * - Notice that you always get back an array containing the SAME NUMBER OF ITEMS compared to the original array, but every item has most 
 * likely undergone some transformation.
 * 
 * - In the first example, the transformation is that we multiply every number by 2. In the second example, the transformation is that we 
 * call .toUpperCase() on every item.
 * 
 * - Let's take a look at how we can implement these transformations:
 */

const numbers = [4, 2, 5, 8];

console.log("1) Original 'numbers' array:", numbers);

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log("2) Array 'numbers' changed:", doubled); // [ 8, 4, 10, 16 ]


const names = ["sam", "Alex"];

console.log("3) Original 'names' array:", names);

const upperNames = names.map(function (name) {
  return name.toUpperCase();
});

console.log("4) Array 'names' changed:", upperNames); // [ 'SAM', 'ALEX' ]

/**
 * - If you forget to return from inside the callback function, you will end up with the following array: [undefined, undefined]. 
 * That's because, for every item in the original array (["sam", "Alex"]), you're returning undefined so the end result will be 
 * [undefined, undefined].
 * 
 * - Once you make this mistake a few times, it becomes a clear signal that you've forgotten the return keyword.
 */