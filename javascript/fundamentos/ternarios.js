/**
 * função arrow com operador ternário
 * é um operador ternário pois possui a seguinte estrutura
 * => ... ? (resultado true) : (resultado false)
 */
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.5))
console.log(resultado(0.5))