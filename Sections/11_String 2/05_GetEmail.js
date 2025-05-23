/**
 * Get email
 * 
 * Complete the function getEmail such that it returns the email entered by the user without any leading/trailing 
 * spaces (in case the user entered them by accident).
 * 
 * Make sure to try it in the browser tab and try to enter an email with leading/trailing spaces and see how they show 
 * up. (You will have to return something in the getEmail function for them to show up in the browser tab).
 * 
 */

'use strict';

const getEmail = email => email.trim();

function main() {

  let email = "    alan@test.com   ";

  console.log(`\n-> Email entered: ${email};`);

  console.log(`\n-> Email without spaces: ${getEmail(email)};`);

};

main();