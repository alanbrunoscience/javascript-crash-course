/**
 * Simple translation I
 * 
 * Complete the function getTranslation such that it returns the correct translation for the word "welcome" depending on the 
 * language chosen by the user.
 * 
 * Make sure to check out the different logs in the console when you select a value in the dropdown in the browser tab.
 * The goal of this challenge is to understand reading a dynamic property and why it is sometimes needed.
 * 
 * We will revisit this challenge, later on, to offer a "default translation" when a certain language does not have a 
 * translation yet.
 * 
 */

'use strict';

import translations from "./translations.js";

export const getTranslation = (language) => {
  return translations.welcome[language];
}