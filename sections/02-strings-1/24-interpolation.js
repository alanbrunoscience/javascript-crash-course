'use strict';

/**
 * Interpolation
 *
 * → Template strings support interpolation! This means you could write a variable
 * in your string, and get its value;
 *
 * → The syntax is straightforward, you wrap your variable name with a dollar sign
 * and curly braces;
 *
 * → Let's take an example where we have a variable 'language' with a value of
 * 'JavaScript'.
 *
 */

let language = "JavaScript";

console.log(`I'm learning ${language}.`); // "I'm learning JavaScript."

/**
 * Note:
 *
 * → Remember that string interpolation ONLY works with backticks. If you ever try
 * it and it doesn't work, double-check that you're using backticks rather than single
 * or double quotes.
 *
 */