//concatenacao ruim para strings muito grandes
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

//concatenacao via template string
const template =`
    Olá
    ${nome}!`
console.log(concatenacao,template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // ele interpreta o que está dentro das chaves


//funcao elo
const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado')}!`)
