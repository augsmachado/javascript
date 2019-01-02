function teste1(num) {
    // só uma sentença de código é associada ao if sem usar chaves{}
    // JS não é baseado em identação, por isso 'Final'será executada
    if(num > 7)
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // cuidado com o ; e não usar com as estruturas de controle
        console.log(num)
    }
}
teste2(6)
teste2(8)