/**
 * Returning from loop
 * 
 * - There's a common mistake that occurs when you try to return from a function that contains a forEach call.
 * That's because there are 2 functions. Let's say you have this function:
 */

function logUserIds(userIds) {
  userIds.forEach(function(userId) {
      console.log(userId);
  });
}

// And you would like this function to return true when it's completed. Where do you place the return true? Would it be:

function logUserIds(userIds) {
  userIds.forEach(function(userId) {
      console.log(userId);
      return true; // does this work as expected?
  });
}

// or:

function logUserIds(userIds) {
  userIds.forEach(function(userId) {
      console.log(userId);
  });
  return true; // or is this the correct way?
}

// If we take a step back, the return keyword returns from its own function. Thus, the first approach does NOT
// work. Because you're returning from the callback function that the .forEach() receives. This will NOT return
// from the logUserIds function. Thus, the correct answer is the 2nd option:

function logUserIds(userIds) {
  userIds.forEach(function(userId) {
      console.log(userId);
  });
  return true; // ✅ return from the logUserIds function
}

// The return true inside the function is not really useful because it's going to return from the callback
// function but there is no more code inside that function anyway. The next iteration of the .forEach() will 
// still occur. Also, the .forEach() method will always return undefined no matter what you return inside of it.

// One more example
// 
// - Let's take a look at an educational example to make sure you understand it. What do you think this function
// logGrades will return once it's called?

const grades = [10, 14, 15];

function logGrades(grades) {
  grades.forEach(function(grade) {
      console.log(grade);
      return 10;
  });
  return 20;
}

console.log(logGrades(grades));

// You may have noticed that we're using the function keyword instead of modern JavaScript's arrow functions. 
// This is purposely the case as functions are quite common everywhere. Arrow functions will be introduced in 
// a later chapter and then used in array iteration.
