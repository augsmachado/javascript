// foreach somente percorre o array e deixa a cargo do dev especificar seus anseios
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// funcao callback --> para cada interacao passa o array como elemento
// funcao callback --> recebe 3 paramentros: nome, indice, array
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

// armazenar uma funcao em variavel e passar como constante para o foreach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)