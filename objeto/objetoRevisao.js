// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// apagar
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// abstracao do que pode conter um objeto
const carro = {
    modelo: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculaValorSeguro: function() {
        // ...
    }
}

// acesso a atributos
carro.proprietario.endereco.numero = 1000
console.log(carro)

// delecao encadeada
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)  // retorna undefined mesmo tendo sido apagado
//console.log(carro.condutores.length)  // nao acessar valores indefinidos