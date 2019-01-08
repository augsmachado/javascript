let dobro = function (a) {
    return 2 * a
}

// usando arrow function (sempre é anonima)
dobro = (a) => {
    return 2 * a
}

// arrow function simplificada é muito usada e tem retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))

// pode ser escrita como ola = _ => 'Olá!', onde _ é o parametro
ola = () => 'Olá!'
console.log(ola())