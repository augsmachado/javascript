const  imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        // como o case está vazio
        // executo a mesma sentença do próximo caso ele exista
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(9.1)
imprimirResultado(7)
imprimirResultado(4.2)
imprimirResultado(2.5)
imprimirResultado(-1)