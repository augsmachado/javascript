console.log(typeof console)
console.log(Math.ceil(6.1))

const objeto1 = {}
objeto1.nome = "Bola"  // equivalente a obejto['nome'] = "Bola2"
console.log(objeto1.nome)

function Obj(nome) {
    this.nome = nome  // um atributo público usa this
    this.exec = function() {
        console.log("Exec...")
    }
}

const objeto2 = new Obj("Cadeira")
const objeto3 = new Obj("Mesa")
console.log(objeto2.nome)
console.log(objeto3.nome)