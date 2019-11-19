// heranca é a capacidade de receber de uma classe superior atributos e comportamentos
// de forma a reutilizar o codigo sem precisar recriar o codigo

// entre heranca e composicao, priorize a composicao

// [[Prototype]] != Object.prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velmax: 200
}

console.log(ferrari.__proto__) // acesso a super class
console.log(ferrari.__proto__ === Object.prototype) // prototype de alto nivel

console.log(Object.prototype.__proto__ === null) // o Object.prototype nao possui prototipo

// um objeto em JS possui uma referencia para o seu prototipo
// o atributo prototype esta presente somente em funcoes, nunca em objetos
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)