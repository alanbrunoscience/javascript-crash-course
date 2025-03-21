const readlineSync = require('readline-sync');

function getDescription(text) {

  return text.substring(0, 10) + "...";

}

const description = readlineSync.question("Enter text: ");

console.log(getDescription(description));

// Exporta a função para uso em outros módulos (se necessário)
module.exports = { getDescription };