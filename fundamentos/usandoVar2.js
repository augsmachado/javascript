var numero = 1  // escopo global
{
    var numero = 2  // sobrescreve linha 1
    console.log('dentro =', numero)
}
console.log('fora =', numero)