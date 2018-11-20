const escola  = "Cod3r"

console.log(escola.charAt(4))   // retorna o valor de certa posicao
console.log(escola.charAt(5))   // vai retornar um valor fora da String
console.log(escola.charCodeAt(3))   // pega valor na tabela ASCII
console.log(escola.indexOf('3'))    // retorna indice na string

console.log(escola.substring(1))    // imprime após o indice 1
console.log(escola.substring(0, 3))     // imprime entre o indice 0 e 3

console.log("Escola".concat(escola).concat("!"))    // concatena strings
console.log("Escola" + escola + "!")    // outra forma de concatenar
console.log(escola.replace(/\d/g, 'e'))  // substitui todos os digitos por e

console.log('Ana,Maria,Pedro'.split(','))  // conversao de string em array