// sempre use constates ao invés de variáveis
let isAtivo = false
console.log(isAtivo)

// modifica o valor da variável
isAtivo = true
console.log(isAtivo)

isAtivo = 1
// para usar negacao de uma variável, use (!)
// se usar (!!), você volta pro valor original que era antes de negar
console.log(!!isAtivo)

console.log('os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!isAtivo == Infinity)

console.log('os falsos ...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar "ou" ...')
console.log(!!(''|| null || 0 || ' ' || 123))

// exemplo de uso
let nome = ''
console.log(!!nome || 'Desconhecido')