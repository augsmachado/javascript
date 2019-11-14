const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b , operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // assume valor padrao soma para o 3 paramentro
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)  // funcao anonima arrow function

const pessoa = {
    falar: function () {  // pode ser escrito como falar() { ... }
        console.log('Opa')
    }
}
pessoa.falar()
