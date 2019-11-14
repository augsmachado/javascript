// this está atrelado ao contexto em que é definido
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()  // conflito de paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)  // amarra this ao objeto indicado
falarDePessoa()