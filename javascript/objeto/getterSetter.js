// Aumenta o encapsulamento do código

const sequencia = {
    _valor: 1,  // convencao para dizer que uma variável é "privada"
    
    // acesso de valor numa funçao e o processa antes de retorna-lo
    get valor() { return this._valor++ },
    
    // permite validacoes antes do retorno
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)