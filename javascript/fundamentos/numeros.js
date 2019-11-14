const peso1 = 1.0
const peso2 = Number('2.0')  // outra maneira de adicionar numero

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))  // metodo para numeros inteiros
console.log(Number.isInteger(peso2))

const prova1 = 9.871
const prova2 = 6.871

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2))  // quantia de casas decimais
console.log(media.toString(2))  // em binario
console.log(typeof media)  // tipo da variavel
console.log(typeof Number)