// Evite usar esses tipos de códigos e estruturas
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) break // interrompe e sai do laço correntes
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) continue  // pulou o indice 5 e continuou ate o fim do array
    console.log(`${y} = ${nums[y]}`)
}

// rótulo
externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}