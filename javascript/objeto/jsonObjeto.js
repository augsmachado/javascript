// json --> json é um formato de dados para interaoperabilidade entre sistemas
// json é um formato de texto que pode ser gerado e lido em tecnologias diferentes

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

// JS object --> JSON
console.log(JSON.stringify(obj)) // exclui a funcao, pois é um formato de texto

// JSON --> JS object
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))  nao é formato válido
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))  // todo os atributos devem ser delimitados por "aspas duplas"
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}')) // caso use string --> "string entre aspas duplas"

// veja json5.org --> possível novo padrão para json
// jsonlint.com  --> é um json válido?