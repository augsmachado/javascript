function Pessoa() {
    this.idade = 0

    /**
     * uma constante nunca muda
     * por isso aponta-se para this
     * e resolve o problema dele ser variável pelo contexto
     */ 
    const self = this
    setInterval(function() {   // dispara outra funcao a partir de um intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa