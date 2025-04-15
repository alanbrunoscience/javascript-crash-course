// Array to String Applied to HTML

/**
 * - The previous approach is often used to  generate an HTML string from an array. Let's say we'd like to 
 * return an unordered list (a ul with li items) from the users array above. Instead of writing it with
 * .forEach, you can use the previous trick as follows:
 */

"use strict"

const users = [{
  id: 1,
  name: "Sam Doe"
}, {
  id: 2,
  name: "Alex Blue"
}];

const html = `
  <ul>
    ${users.map(user => `\t<li>${user.name}</li>`).join("\n")}
  </ul>`;

console.log(html);

/**
 * - Notice how for every user, we return an <li>...</li> with the user's name inside. What's very important here is the
 * .join(""). If you forget this, you will get the following HTML:
 * 
 * <ul><li>Sam Doe</li>,<li>Alex Blue</li></ul>
 * 
 * - That's because the array returned from .map() will automatically be converted to a string by the browser. It will
 * automatically call the .toString() method which will insert a comma after every array item. Instead, you want to
 * convert the array into a string yourself. You can do that by calling .join("") with an empty string as glue.
 * 
 * - Finally, you have to wrap the whole string with the opening <ul> and the closing </ul>.
 * 
 * - You don't necessarily have to use this approach, but we do recommend that you get used to it as it (or a very 
 * similar adaptation) is very frequently used in front-end libraries/frameworks (React, Angular, lit-element, etc)!
 */