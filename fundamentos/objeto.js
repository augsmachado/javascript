// as chaves representam objetos
const prod1 = {}

// em JS você pode criar um objeto vazio e depois ir atribuindo valores a ele
// permite criar ojetos dinamicamente
// um objeto é uma coleção de objetos
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

// evitar atributos com espaço
prod1['Desconto Legal'] = 0.40

// o obejto tem um identificador unico
console.log(prod1)

// forma literal de declarar objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: '79.90',
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

// JSON não é um objeto, é um texto