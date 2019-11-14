console.log(typeof Object)  // objeto
console.log(typeof new Object) 

const Cliente = function() {}  // função
console.log(typeof Cliente)
console.log(typeof new Cliente)  // instanciando uma função usando new


class Produto{} // ES 2015 (ES6) -- A classe, internamente em JS, é uma função
console.log(typeof Produto)
console.log(typeof new Produto()) // instanciando uma classe se tem um objeto