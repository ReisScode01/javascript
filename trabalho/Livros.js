// Definição da classe Livro
class Livro {
    // Construtor da classe
    constructor(titulo, autor, preco, quantidadeEstoque) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    // Método para calcular o valor total em estoque
    calcularValorTotalEmEstoque() {
        return this.preco * this.quantidadeEstoque;
    }

    // Método para verificar a disponibilidade do livro
    verificarDisponibilidade() {
        if (this.quantidadeEstoque > 0) {
            return "Em estoque";
        } else {
            return "Esgotado";
        }
    }
}

// Exemplo de uso da classe Livro
// Criando uma instância de Livro
let livro1 = new Livro("JavaScript: The Good Parts", "Douglas Crockford", 39.99, 10);

// Exemplo de utilização dos métodos
console.log(Livro: ${livro1.titulo});
console.log(Autor: ${livro1.autor});
console.log(Preço: $${livro1.preco});
console.log(Quantidade em estoque: ${livro1.quantidadeEstoque});
console.log(Valor total em estoque: $${livro1.calcularValorTotalEmEstoque()});
console.log(Disponibilidade: ${livro1.verificarDisponibilidade()});
