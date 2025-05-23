'use strict';

const users = [{
  id: 1,
  name: "Sam Doe"
},
{
  id: 2,
  name: "Alex Blue"
}];

const userNamesArray = users.map(user => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"

// Or you can also chain these 2 commands and write it on one line

const csv2 = users.map(user => user.name).join(", ");
console.log(csv2); // "Sam Doe, Alex Blue"