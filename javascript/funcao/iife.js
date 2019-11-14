// funcao auto-invocada serve para fugir do escopo global do browser
// fuja do escopo global igual ao Diabo foge de Deus

// IIFE -> Immediately Invoked Function Expression
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
