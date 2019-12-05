/*
imperativo => exatamente como deve ser feito e na ordem de execucao\
    o foco não é o que tem que ser feito, mas como deve ser feito

declarativo => o foco é em o que deve ser feito dando apenas os criterios (o que realmente importa)
    permite o reuso de funcoes e deixar mais claro
*/

const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1;