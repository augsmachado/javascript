// o array é heterogêneo e não possui tamanho fixo

// array de forma literal
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// se eu acessar o indice que não existe? Não gera erro, gera um item vazio não definido
console.log(valores[4])

// posso adicionar uma posição que não existe
valores[10] = 10

// quantos elementos tem no array
console.log(valores.length)

// não é boa prática criar arrays heterogêneos
// crie arrays específicos para cada situação
// adicionar valores heterogêneos
valores.push({id: 3}, false, null, "teste")
console.log(valores)

// retira o ultimo valor do array
console.log(valores.pop())
delete valores[0]
console.log(valores)

// tipo do array é objeto
console.log(typeof valores)