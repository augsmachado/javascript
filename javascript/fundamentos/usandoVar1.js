/**
 * A variável Var, desde que não dentro de um function, é acessível a todos os escopos
 * Vale para bloco de código que não dentro de uma função
 */
{{{{ var sera = 'Será????'}}}}
console.log(sera)

// O escopo var definido em uma função, só está acessível na função
function teste () {
    var local = 123
}

teste()
// console.log(local) //Erro!

/** Evite usar variáveis globais, pois qualquer sobrescrita pode gerar Error 
 * Var: escopo global --> acessível em todo o código
 * Var: escopo função --> acessível localmente no código
*/
