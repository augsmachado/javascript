// pessoa --> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa --> 456 -> {...} o que gera um problema pois pessoa é constante
// pessoa = { nome: 'Ana'}

// quando o obj esta congelado, nao é possivel mexer mais
// freeze torna o Obj constante
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)