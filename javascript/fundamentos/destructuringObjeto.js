// Novo recurso do ES 2015: operador de desestruturação
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } =  pessoa // como uso destructuring
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // forma de mudar o nome das variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa  // acessa atributos que não existem
console.log(sobrenome, bemHumorada)

// Atenção para não acessar um objeto que não existe, com atributos que nunca foram definidos
const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

