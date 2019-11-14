function tratarErroELancar(erro) {
    /**
     * throw new Error ('...')  // pode armazenar um erro no Ajax
     * throw 10  // pode ser um número
     * throw true  // pode ser um boolean
     * throw 'mensagem'  // pode ser uma string
    */

    // pode ser um objeto
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    // tratamento de erro para funções potencialmente problemáticas
    try {  // tentar
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {  // se não conseguir, lançar erro para
        tratarErroELancar(e)
    } finally {  // se nada resolver, faça isso
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)