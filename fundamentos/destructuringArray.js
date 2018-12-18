// forma de desestruturar um array com 1 posição
const [a] = [10]
console.log(a)

// forma de desestruturar um array com multiplos valores atribuidos
const [n1, n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, 6)

// desestruturação de uma matriz não é usual na prática
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)