const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

// vai achar valor global, pois a funcao tem consciencia do local em que foi declarada
exec()