'use strict';

const readlineSync = require('readline-sync');

function getDescription(text) {

  return text.substring(0,10);

}

const name = readlineSync.question("Enter text: ");

console.log(getDescription(name));

// Exporta a função para uso em outros módulos (se necessário)
module.exports = { getDescription };