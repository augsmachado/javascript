// par nome/valor
const saudacao = 'Opa' // contexto léxico onde a variável foi definida

function exec(){
    const saudacao = 'Falaaa' // contexto local
    return saudacao
}

// Objetos são grupo aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)