var numero = 1 // Possui escopo global e de função
{
    let numero = 2 // Possui escopo global, de função e de bloco
    console.log('Dentro do bloco=', numero)
}
console.log('Fora do bloco =', numero)

// JS procura a variável de escopo menor, mas se não encontra, pega o valor do escopo maior
{
    let numero2 = 2 // escopo local
    console.log('Escopo menor =', numero)
}
console.log('Escopo maior =', numero)