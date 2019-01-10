// transformar uma class em construtora
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        // this acessa o obj instanciado
        console.log(`Meu nome é ${this.nome}`)
    }
}

// funcao construtora
function criarPessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// voce pode usar new para instanciar uma funcao construtora
const p1 = new criarPessoa('Joao')
p1.falar()