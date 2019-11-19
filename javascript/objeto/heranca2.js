// Cadeia de prototipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' } // shadowing  --> sobrescreve a variavel herdada

console.log(filho.attr1)

console.log(filho.attr0)
Object.prototype.attr0 = 'Z' // nao faca isso em casa
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // sobrescrita da funcao
    }
}

// funcao que estabelece a relacao de prototipo entre objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


console.log(ferrari) // atributos somente da funcao
console.log(volvo) // mas por padrao uma funcao ToString (funcao que retorna string) eh retornada

volvo.acelarMais(100)
console.log(volvo.status())

ferrari.acelarMais(300)
console.log(ferrari.status())