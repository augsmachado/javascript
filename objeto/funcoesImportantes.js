const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  // pega as chaves do objeto
console.log(Object.values(pessoa))  // valores do objeto
console.log(Object.entries(pessoa))  // array de chave e valores

// gera um array e extrair valores (destructuring)
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// definir propriedades para um objeto ou introspecção de dados
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,  // listadada
    writable: false,  // modificada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest =  { a: 1}  // destino
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)  // concatena no objeto destino (1o paramentro)
// se tiver valor igual, o ultimo valor sobreescreve-o
console.log(dest)

// trava valores
Object.freeze(obj)
obj.c = 1234
console.log(obj)
