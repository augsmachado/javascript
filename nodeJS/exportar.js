// this é uma referencia para module.exports
console.log(module.exports === this)

// uma forma diferente de exportar
console.log(module.exports === exports)

// significa que os atributos seram visiveis fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

// mesmo exports apontando para null, o module ainda continuara apontando para as variaveis
// isso acontece pq extends é uma variavel que aponta para o mesmo objeto de referencia em memoria

exports = null
console.log(module.exports)

// mesmo fazendo isso abaixo, o que sera retornado é o objeto de module.exports
exports = {
    nome: 'Teste'
}
console.log(module.exports)

module.exports = { publico: true }