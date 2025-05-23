/**
 * Array Find
 * 
 * When you call the .find(callback) method on an array, you will get back 'the first item' that matches the condition that you specify. If
 * no items were found, you will get back 'undefined'.
 * 
 * So the .find(callback) method will call the callback that you provided for every item in the array until one of the callbacks returns
 * 'true'. When this happens, it will STOP calling the remaining callbacks and RETURN to you the item for which the callback returned 
 * 'true'.
 * 
 */

'use strict';

const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function (name) {
  return name === "Alex";
});

console.log(result); // "Alex"