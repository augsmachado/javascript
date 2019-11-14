// como declarar uma classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        // this acessa o obj instanciado
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('Joao')
p1.falar()

const criarPessoa =  nome => {
    return {
        // como criar um método
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Jhon')
p2.falar()