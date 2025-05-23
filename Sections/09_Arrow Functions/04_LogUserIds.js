/**
 * Log User Ids
 * 
 * Our 'logUserIds' function fails when we call it without any parameter.
 * 
 * Fix that without using an if condition.
 * 
 */

'use strict';

function logUserIds(userIds = []) {
  userIds.forEach(function (userId) {
    console.log(userId);
  });
}

logUserIds([10, 15, 14]); // should log every userId to the console
logUserIds(); // should NOT fail