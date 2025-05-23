/**
 * Slug
 * 
 * In computer science, a slug is a string used to identify a certain item. Oftentimes, this slug is used in the URL 
 * for Search Engine Optimization and better user experience. Let's say you've got a product called: "Easy assembly 
 * dining table". We cannot use this name in the URL bar because it contains spaces (it won't look nice, for example 
 * https://example.com/item/Easy assembly dining table). This is why we use a slug that looks like this:
 * 
 * -> easy-assembly-dining-table so the URL becomes: https://example.com/item/easy-assembly-dining-table.
 * 
 * Complete the function getSlug() such that it returns the slug based on the text it receives, following the rules 
 * below:
 * 
 * 1. The slug should not be more than 15 characters. When there are more than 15 characters, ignore everything after 
 * the 15th character.
 * 
 * 2. The slug should always be in lower case.
 * 
 * 3. Space characters should be replaced by dashes (-).
 * 
 */

'use strict';

const getSlug = name => name.toLowerCase().substring(0, 15).replaceAll(' ', '-');

// Or
// const getSlug = name => {
//   // start by lower casing the string
//   let result = name.toLowerCase();
//   // then get the first 15 characters
//   result = result.substring(0, 15);
//   // convert all the space characters to dashes
//   result = result.replaceAll(" ", "-");
//   // return result
//   return result;
// }

// Sample usage - do not modify
console.log(getSlug("IKEA table")); // "ikea-table"
console.log(getSlug("200cm Bed")); // "200cm-bed"
console.log(getSlug("Bedside lavalamp")); // "bedside-lavalam"
console.log(getSlug("A B C noodles")); // "a-b-c-noodles"