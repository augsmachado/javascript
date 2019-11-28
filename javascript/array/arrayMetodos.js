// vc nao pode atribuir mais nada a pilotos, mas seu conteudo pode ser alterado
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o ultimo elemnto
console.log(pilotos) // massa acabou de quebrar o carro!

pilotos.push('Verstappen') // adiciona novo elemento a lista na ultima posicao
console.log(pilotos)

pilotos.shift() // retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posicao
console.log(pilotos)

// splice --> pode adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// splice --> pode remover elementos
pilotos.splice(3, 1) // massa quebrou de novo :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array a partir do id=2 de pilotos
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // adiciona valores de 1 a 3
console.log(algunsPilotos2)