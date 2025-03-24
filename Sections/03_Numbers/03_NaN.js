/**
 * NaN (Not a Number)
 * 
 * - You may sometimes encounter NaN which stands for Not a Number. For example, 
 * if you try to multiply a number by a string (which you should not do);
 * 
 * - NaN is often a sign that something is wrong with your code, most often you forgot to convert a string to
 * a number. One of the most common cases is when an object property evaluates to undefined because of a typo 
 * and then it's used as if it was a valid number.
 */

console.log("abc" * 4); // NaN