// reescrita do exemplo do thisBind.js
// aqui o this se mantêm sem variar, pois seu escopo é de uma arrow function
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
};
new Pessoa;