let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)  // é estritamente igual ao escopo global


const obj = { }
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// no contexto do this, ele referencia para o módulo do Node que foi definido
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// bind dentro de uma arrow function
// arrow function se mantém mesmo que tentando se mudar a referencia do this com bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(module.exports)