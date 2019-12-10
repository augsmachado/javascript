// coloque exatamente respeitando as letras maiusculas e minusculas
// pois em um servidor linux nao sera reconhecido
const moduloA = require('../../sistemaModulos/moduloA')
console.log(moduloA.ola)

/*
quando se trata de um modulo dentro de node_modules basta passar o nome do modulo
por exemplo

const saudacao = require ('saudacao')
console.log(saudacao.ola)
*/

const c = require('./pastaC/index')
console.log(c.ola2)

// voce pode usar um modulo core do node
/* const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */