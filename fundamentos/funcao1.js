// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  // Not a number
imprimirSoma(2, 3, 4, 5, 6, 7, 8)  // pega os primeiros e ignora o resto
imprimirSoma()  // Not a number

// Função com retorno
// b tem valor padrão
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))  // usa padrão b
console.log(soma())  // como a não está tratado retorna NaN