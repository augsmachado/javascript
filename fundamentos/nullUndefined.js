// Passagem de valores por referência se dá em objects
const a = {name: "teste"}
console.log("a:", a)

const b = a
b.name = "Opa"
console.log("a:", a, "b:", b)

// Passagem de valores por atribuição se dá em tipos primitivos
let c = 3
let d = c
d++
console.log("d:", d, "c:", c)

// Conceito do Undefined e null
let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

// Cuidados com variáveis nulas
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

// evite atribuir undefined, deixe a linguagem trabalhar para você
produto.preco = undefined

console.log(!!produto.preco)

/**
 * Tira o atributo do objeto
 * 
 * delete produto.preco
 * console.log(produto)
 */

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)