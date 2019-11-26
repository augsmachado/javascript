// nao existe o tipo de dados array em JS
// array --> é um objeto, o que não é muita novidade, afinal tudo é objeto rs
// array é indexado a partir de zero
// um array const não quer dizer que os dados serão constantes, mas que ele aponta para endereco de memoria constante


console.log(typeof Array, typeof new Array, typeof []) // é uma estrutura dinamica e heterogenea

// a boa pratica diz que voce deve trabalhar com dados homogeneos no array
let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma atribuicao
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // forma literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // parametros que nao foram declarados sao passados como undefined

aprovados[3] = 'Paulo' // sobreescrever elemento
aprovados.push('Abia') // adicionar elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] // uma das formas para excluir um elemento do array
console.log(aprovados[1])
console.log(aprovados)

aprovados.splice(1, 2, 'elemento1', 'elemento2') // adiciona ou remove um elemento do array
console.log(aprovados)