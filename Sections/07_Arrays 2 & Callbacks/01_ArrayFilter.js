/**
 * Array Filter
 * 
 * - A common array method is the .filter() method. When you call this method on an array, you will
 * get back another array that contains some of the items from the original array, based on the
 * condition you specify. Let's take an example:
 */

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
  return number > 10; // Don't forget the return keyword inside the callback function.
});

console.log(numbersAboveTen); // [ 14, 11 ]

// Notice how we got back a new array that contains the items which have satisfied the condition. 
// The condition is that the number must be above 10.

// ===============================================================================================

/**
 * How does Array.filter(callback) work?
 * 
 * function(number) {
 *    return number > 10;
 * }
 * 
 * - JavaScript will take your callback and call it for every single item in the array. Our numbers array has 5 items, so it will 
 * all it 5 times. Every time that it calls this function, it will give a value to the number parameter that you specified inside 
 * this callback.
 * 
 * 1. The first time it runs, it will give the number a value of 9 (the first item of the array);
 * 
 * 2. The second time it runs, it will give the number a value of 5 (the second item of the array);
 * 
 * 3. And so on and so forth until the last item of the array.
 * 
 * - This is how callbacks work. Now every array method has a different behavior which we'll be explaining. This behavior often depends 
 * on the result of the callback. In this example, if the callback function returns 'true', then the item will be included in the final 
 * array returned by .filter(). However, if the callback function returns 'false', then the item will not be included in the final array.
 * 
 */