/**
 * Const
 * 
 * → Variables defined with 'const' cannot be re-assigned. This means you can use the '='
 * sign only once when defining the variable. Here's an example:
 * 
 */

'use strict';

const language = "C++"; // Cannot be re-assigned anymore
console.log(language); // "C++"

language = "Python" // ❌ Type error: this will break your script

/**
 * A note about const
 * 
 * → An important note about 'const' is that it does not create a Constant or an Immutable 
 * value. This will be thoroughly explained once we learn about arrays & objects. What you 
 * need to know, for now, is that you can only use the equal sign once, but you can still 
 * change elements inside an array or object.
 * 
 */
