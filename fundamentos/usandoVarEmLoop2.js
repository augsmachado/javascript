const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){  // push adiciona valores no array
        console.log(i)
    })
}

funcs[2]()  // imprime para todas as situações o indice 10
funcs[8]()