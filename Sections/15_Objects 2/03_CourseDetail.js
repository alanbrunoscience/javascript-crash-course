/**
 * Course detail 
 * 
 * Complete the function 'getCourseDetail' such that it returns the following string:
 * 
 * 'The course X is Y'
 * 
 * Where 'X' is replaced with the 'detail' parameter and 'Y' replaced with the value from the course parameter where the property is
 * 'detail'. So, for example, for 'getCourseDetail(course, "name")' the value of Y should be 'course.name'.
 * 
 */

'use strict';

const getCourseDetail = (course, detail) => {
  return `The course ${detail} is ${course[detail]}`;
}

// Or
// const getCourseDetail = (course, detail) => `The course ${detail} is ${course[detail]}`;

// Sample usage - do not modify
console.log(getCourseDetail({ id: 1, name: "Learn JavaScript", year: 2021 }, "name")); // "The course name is Learn JavaScript"
console.log(getCourseDetail({ id: 1, name: "Learn JavaScript", year: 2021 }, "year")); // "The course year is 2021"