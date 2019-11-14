// uma funcao factory retorna uma instancia de um objeto
const prod1 = {
    nome: '...',
    preco: 45
}

// factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())