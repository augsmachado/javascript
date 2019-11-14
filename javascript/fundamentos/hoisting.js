/**
 * Hoisting é içar
 * A variável VAR não precisa ser declarada primeiro para que seja utilizada
 * Podendo ser declarada depois do ponto onde será utilizada
 * A váriavel LET não sofre hoisting
 */
console.log('a =', a)
var a = 2
console.log('a =', a)

/**
 * O hosting de A é semelhante a este código abaixo
 * Onde B foi declarado antes e depois recebeu uma atribuição
 */
var b
console.log('b =', b)
b = 3
console.log('b =', b)

/**
 * Hosting em uma função
 * Funciona como se a variável tivesse declarado antes da função
 */
function teste() {
    console.log('c =', c)
    var c = 2
    console.log('c =', c)
}
teste()