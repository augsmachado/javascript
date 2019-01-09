// closure é o escopo criado quando uma funcao é declarada
// esse escopo permite a funcao acessar e manipular variaveis externas à funcao
// esse escopo tem haver com o contexto léxico


// contexto léxico em acao
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())  // a saida é 'Local' devido ao seu escopo de declaracao