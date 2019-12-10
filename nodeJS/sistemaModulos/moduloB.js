// quado vc substitui o obj padrao, deve utilizar o metodo abaixo
// isto eh module.exports = {}
// caso contrario dara um erro, dirá que é undefined
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}