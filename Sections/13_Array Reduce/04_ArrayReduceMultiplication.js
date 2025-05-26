/**
 * Array reduce: multiplication
 * 
 * In this lesson, we'll explore another example for array reduce which is 'multiplication'.
 * 
 * Let's say we've got the following numbers and we'd like to multiply them all:
 * 
 */

'use strict';

const numbers = [5, 2, 10];

// We can use '.reduce()' here because we're reducing the entire array into a single number (which is the multiplication of all
// these numbers).

const result = numbers.reduce((total, current) => {
  return total * current;
}, 1);

console.log(result); // 100

/**
 * Starting value for multiplication
 * 
 * Before we explain the code step by step, let's talk about the initialValue which has a value of 1 here;
 * 
 * When doing multiplication, we can't have a starting value of '0'. That's because any number multiplied by 0
 * will result in 0. '5 * 0 = 0'. We need a number that is neutral in multiplication, and that number is 1 because
 * any number multiplied by 1 will be that same number. For example, '1 * 5 = 5';
 * 
 * This is why in multiplication we use a starting value of '1' and in sum, we use a starting value of '0'.
 * 
 * ===============================================================================================================
 * 
 * Step by step explanation
 * 
 * Going back to the code, here's how it runs step by step:
 * 
 * const numbers = [5, 2, 10];
 * 
 * const result = numbers.reduce((total, current) => {
 *   return total * current;
 * }, 1);
 * 
 * 1. The first time '.reduce()' callback runs, 'total' will have a value of '1' (coming from the starting value)
 * and current will have a value of 5 (which is the first item of the array).
 * 
 * 2. Then we return 'total * current' which is '1 * 5 = 5' so the next time the callback runs, 'total' will have 
 * a value of 5.
 * 
 * 3. The second time the callback runs, 'total' is '5' and 'current' is '2' (second item of the array). We 
 * compute '5 * 2 = 10'. We return '10'.
 * 
 * 4. The third time the callback runs, 'total' is '10' and 'current' is '10' (third item of the array). We 
 * compute '10 * 10 = 100'. We return '100'.
 * 
 * 5. The result of the '.reduce()' is 100 which is stored in the variable 'result'.
 * 
 * ===============================================================================================================
 * 
 * Common mistakes
 * 
 * When it comes to .reduce(), there are 3 common mistakes:
 * 
 * 1. Syntax errors
 * 
 * - Due to the number of parentheses and curly braces, it can get quite messy. Re-write the code from scratch and
 * write it on pen and paper.
 * 
 * 2. Forgetting to return
 * 
 * - Forgetting to return will lead to undefined values which will most likely end up giving you a result of NaN.
 * Make sure that you return from inside the .reduce() callback.
 * 
 * 3. Wrong initialValue
 * 
 * - The last common mistake is forgetting the 'initialValue' or providing a wrong 'initialValue'.
 * 
 * - If you provide an 'initialValue' of '0' for a multiplication, you will end up with a '0' at the end which
 * should be a cue that the 'initialValue' was wrong.
 * 
 * ===============================================================================================================
 * 
 * Recap
 * 
 * For multiplication, we use an 'initialValue' of '1'.
 * 
 * Reduce common mistakes:
 * 
 * 1. Syntax errors;
 * 
 * 2. Forgetting to return;
 * 
 * 3. Wrong initialValue.
 * 
 */