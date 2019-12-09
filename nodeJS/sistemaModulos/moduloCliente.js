// sempre que uma classe terminar com Cliente, ela usa outros modulos
const moduloA = require('./moduloA') // caminho realtivo para acessar o arquivo
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB)

// aquilo que vc exporta, eh o que eh visivel para fora do modulo