// percorrer um array com mais proposito
// transformar o array em um unico elemento
// reduce => tem parametro acumulador que é passado como parametro para a proxima interacao
// reduce recebe um callback e um valor inicial

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)