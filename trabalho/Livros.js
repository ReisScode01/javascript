<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalhes do Livro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #detalhesLivro {
            border: 1px solid #ccc;
            padding: 20px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div id="detalhesLivro">
        <!-- Aqui os detalhes do livro serão inseridos -->
    </div>

    <script>
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

            // Método para exibir os detalhes do livro no HTML
            exibirDetalhesNoHTML() {
                let detalhesLivroElement = document.getElementById('detalhesLivro');
                detalhesLivroElement.innerHTML = `
                    <h2>${this.titulo}</h2>
                    <p><strong>Autor:</strong> ${this.autor}</p>
                    <p><strong>Preço:</strong> $${this.preco.toFixed(2)}</p>
                    <p><strong>Quantidade em estoque:</strong> ${this.quantidadeEstoque}</p>
                    <p><strong>Valor total em estoque:</strong> $${this.calcularValorTotalEmEstoque().toFixed(2)}</p>
                    <p><strong>Disponibilidade:</strong> ${this.verificarDisponibilidade()}</p>
                `;
            }
        }

        // Exemplo de uso da classe Livro
        // Criando uma instância de Livro
        let livro1 = new Livro("JavaScript: The Good Parts", "Douglas Crockford", 39.99, 10);

        // Chamando o método para exibir os detalhes no HTML
        livro1.exibirDetalhesNoHTML();
    </script>
</body>
</html>

