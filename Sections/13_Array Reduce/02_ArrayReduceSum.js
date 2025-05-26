/**
 * Array reduce: sum
 * 
 * Time to take a look at the code! In this lesson, we'll focus on one use case of reduce: calculating the sum. Thus, reducing an
 * array of numbers into its sum.
 * 
 * Assuming the grades array below:
 * 
 */

'use strict';

const grades = [10, 15, 5];

// Here's how we can calculate its sum with reduce:

const sum = grades.reduce((total, current) => {
  return total + current;
}, 0);

/**
 * There's a lot of things happening here, let's break them down:
 * 
 * 1. We call the '.reduce()' method on the grades array;
 * 2. We assign the result of 'grades.reduce()' to a new variable called sum;
 * 3. The reduce method is taking 2 parameters: The reducer and the initial value.
 * 
 * =============================================================================================================================
 * 
 * Reducer
 * 
 * The reducer in this example is:
 * 
 * (total, current) => { 
 *    return total + current;
 * }
 * 
 * This is the callback that is applied for every item in the array, however, this callback takes 2 parameters:
 * 'total' and 'current'.
 * 
 * The 'total' is always referring to the last computed value by the reduce function. You may often see this
 * called as 'accumulator' in documentation which is a more correct name. And the 'current' is referring to a 
 * single item in the array. Let's see what this means by showing the value of 'total' and 'current' for every
 * step:
 * 
 * // code that we run
 * 
 * const grades = [10, 15, 5];
 * 
 * const sum = grades.reduce((total, current) => {
 *    return total + current;
 * }, 0);
 * 
 * 1. The first time the callback runs, total is assigned 0 (because of the initial value that we'll explain in 
 * a bit) and current will be assigned to the first item of the array. So total = 0 and current = 10.
 * 
 * 2. Then we return 'total + current' which is '0 + 10 = 10'. Now the new value of total becomes 10.
 * 
 * 3. The callback runs the second time and this time 'current = 15' (second item of the array) and 'total = 10'. 
 * We return 'total + current' which is '10 + 15 = 25'. The current value of 'total' becomes 25.
 * 
 * 4. The callback runs the third time and this time 'current = 5' (third item of the array) and 'total = 25'. We
 * return 'total + current' which is '25 + 5 = 30'.
 * 
 * 5. There are no more items in the array, so the result of the reduce is the final value of 'total' which is 30.
 * 
 * Thus, the sum is 30.
 * 
 * =============================================================================================================================
 * 
 * Initial Value
 * 
 * The .reduce() method accepts 2 parameters: reducer and initialValue (not to be confused by the 2 parameters of the reducer 
 * which are total and current). We explained the reducer above. The initialValue is the value we give to the total (or accumulator)
 * the first time the callback runs.
 * 
 * Passing '0' as initialValue is the same as declaring 'let sum = 0' when using '.forEach()' to calculate the 'sum'. It's the starting
 * value that we use to be able to calculate the 'sum'.
 * 
 * JavaScript will automatically take your 'initialValue' and pass it to the 'total' argument in the reducer the first time that callback
 * runs.
 * 
 * So is the initialValue always 0? When calculating the sum yes. We'll discuss other values in the next lesson.
 * 
 * =============================================================================================================================
 * 
 * Recap
 * 
 * 1. The 'reduce()' method takes 2 parameters: 'reducer' and 'initialValue'. '.reduce(reducer, initialValue)';
 * 
 * 2. The 'initialValue' is always '0' for 'sum';
 * 
 * 3. The reducer is a callback function that receives '2' parameters: 'total' and 'current';
 * 
 * 4. The 'total' (also called 'accumulator') keeps track of the result of the reduce method. For example, when calculating the
 * sum, it keeps track of the sum, step by step;
 * 
 * 5. The 'current' represents one item of the array;
 * 
 * 6. The 'reducer' is called for every item in the array.
 * 
 */

