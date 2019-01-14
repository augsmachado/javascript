// Código não executável !!!

// Procedural --> baseada em funções
// pode dar problemas devido a inconscistencia dos dados causada por ponteiros
processamento (valor1, valor2, valor3)

// OO --> voce tem dados e dentro deles temos funcoes
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}
objeto.processamento()  // foco passou a ser o objeto

/**  PRINCIPIOS IMPORTANTES
 * Abstração: como traduzir um objeto do mundo real para uma simplificacao na programacao
 * Encapsulamento: detalhes de implementacao escondidos
 *      e mostrar uma interface simples para quem irá utilizar o sistema
 * Heraça (prototype): reuso de código por receber atributos e comportamentos de um objeto-pai
 * Polimorfismo: múltiplas formas genéricas que se consegue abstrair para objetos concretos
 */