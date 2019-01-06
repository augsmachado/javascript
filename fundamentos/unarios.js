let num1 = 1
let num2 = 2

num1++  // acrescenta 1 unidade pós-incrementação
console.log(num1)
--num1  // decrescenta 1 unidade pré-incrementação e prescedência maior que a pós
console.log(num1)

// um código claro é muito importante, seja o mais simples possível
console.log(++num1 === num2--)  // é verdadeiro ou falso?
console.log(num1 === num2)