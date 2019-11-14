const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  // nao apresenta erro se acessar valor que nao estah na string
console.log(escola.charCodeAt(3))  // valor na tabela ASCII
console.log(escola.indexOf('3'))  // retorna o indice associado ao caracter

console.log(escola.substring(1))  // nao inclui indice 1
console.log(escola.substring(0, 3))  // inicia no indice 1 ate indice 3, mas nao o inclui


console.log('Escola'.concat(escola).concat('!'))  // concatena
console.log(escola.replace(3,'e')) // substitui todos os digitos por outro

console.log('ana,maria,pedro'.split(',')) // transforma string em array