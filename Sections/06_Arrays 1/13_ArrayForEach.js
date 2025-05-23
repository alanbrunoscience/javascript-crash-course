/**
 * Array iteration is one of the most important concepts that you will use in JavaScript.
 * 
 * Let's say we have an array of grades and you'd like to loop (or iterate) over every item in this array. Here's how you do that in
 * JavaScript:
 * 
 */

'use strict';

const grades = [10, 8, 13];

grades.forEach(function(grade) {
  // do something with individual grade
  console.log(grade);
});

/**
 * The .forEach(callback) method allows you to run the callback function for every item in that array. Callbacks will be explained in 
 * more depth in the following chapter. For now, let's start with a basic definition.
 * 
 * A callback is a function definition passed as a parameter to another function. In our example above, here's the callback function:
 * 
 * function(grade) {
 *  // do something with individual grade
 *  console.log(grade);
 * }
 * 
 * This callback function receives a grade and then logs it to the console. This is a function definition because it's not being 
 * executed. It only defines the behavior of the function. However, this function definition is passed as an argument to the 
 * .forEach() method:
 * 
 * -> grades.forEach(insert_callback_here);
 * 
 * Once you combine the two together, as in, pass the function definition as an argument to the .forEach() method, then you get:
 * 
 * grades.forEach(function(grade) {
 *  // do something with individual grade
 *  console.log(grade);
 * });
 * 
 * and this code will log every grade from the grades array to the console. So you will get:
 * 
 * 10
 * 8
 * 13
 * 
 * The .forEach() method will take your function definition and call it for every item of the array. Every time the callback is 
 * called, the first parameter will represent the corresponding array item.
 * 
 */