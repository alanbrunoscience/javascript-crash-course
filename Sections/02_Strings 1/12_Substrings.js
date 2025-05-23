/**
 * Substrings
 * 
 * A substring is a part or a portion of a string. For example, "rain" is a substring of the string "brain" because you can get "rain" 
 * by taking the last 4 characters.
 * 
 * When working with strings, you often need to get a few characters of a string rather than all of it. Thus we use the substring method.
 * 
 * --------------------------------------------------------------------------------------------------------------------------------------
 * 
 * Substring signature
 * 
 * A function signature gives you an explanation of the parameters that you need to pass for that method. Let's take a look at the 
 * signature of substring:
 * 
 * -> someString.substring(indexStart, indexEnd)
 * 
 * This means that when you call substring, you can give it 2 parameters, the first one for the indexStart and the second one for
 * indexEnd.
 * 
 * -> indexStart: the position of the first character you'd like to include;
 * -> indexEnd: the position of the first character you'd like to ignore.
 * 
 * This means an indexEnd of 5, will only include up to the character at position 4.
 * 
 */

'use strict';

const language = "JavaScript";

console.log(language.substring(1, 4)); //"ava"