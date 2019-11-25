const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai) // Object.create com passagem de atributos
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.nome}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


// forma para saber se o atributo eh por heranca ou do objetos
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}