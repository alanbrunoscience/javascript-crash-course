/**
 * Array join(glue)
 * 
 * - When you have an array and you render this array to a web page (as we'll see later on in the DOM section of the course), the array 
 * will be automatically converted to a string. JavaScript will automatically invoke the '.toString()' method of the array which returns a
 * string of the array elements separated by commas. Here's how it works:
 * 
 */

const groceries = ["Apple", "Peach", "Tomato"];

console.log(groceries.toString()); // "Apple,Peach,Tomato"

/**
 * - But there's a downside, which is that you cannot customize the glue that gets inserted in between the array items, which is the comma ,
 * character.
 * 
 * - If you'd like to customize the glue, then you can use the '.join(glue)' method:
 */

console.log(groceries.join('; ')); // "Apple; Peach; Tomato"
console.log(groceries.join(' . ')); // "Apple . Peach . Tomato"