// Função em  JS é um Higher Order ou First-Class Object (citizens)
// Pode tratar função como sendo um dado

// forma literal de função, sempre retorna undefined se não for usado return
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// passar funcao como paramentro
function run(fun) {
    fun()
}
run(function () { console.log('Executando ..,') })

// uma funcao retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

// possibilidades de receber uma funcao como paramentro
soma(2, 3)(4)

const cincoMais = soma(2, 3)
cincoMais(4)