function Carrinho(){

return (
    <>
        <h1>Carrinho de Compras</h1>

<!-- Tabela de Produtos -->
<table>
    <thead>
        <tr>
            <th>Foto do Produto</th>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Qtd</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody id="corpo-tabela">
        <!-- O JavaScript vai buscar os dados e injetar as linhas aqui -->
    </tbody>
</table>

<!-- Mais abaixo: Resumo de Valores -->
<div class="resumo-carrinho">
    <div class="resumo-item">
        <strong>Total de itens:</strong> <span id="total-itens">0</span> unidades
    </div>
    <div class="resumo-item">
        <strong>Valor total:</strong> R$ <span id="valor-total">0,00</span>
    </div>
</div>

<!-- Mais abaixo: Botões de Ação -->
<div class="botoes-container">
    <a href="cardapio.html" class="btn-voltar">⬅ Voltar ao Cardápio</a>
    <button class="btn-limpar" onclick="limparCarrinho()" type="button">Limpar Carrinho</button>
    <button class="btn-finalizar" onclick="finalizarPedido()" type="button">Finalizar Carrinho</button>
</div>

<script>
    // Função principal que BUSCA os dados guardados pelo cardápio
    function carregarDadosDoCarrinho() {
        // Puxa a lista de produtos gravada na memória do navegador pelo outro arquivo
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const corpoTabela = document.getElementById('corpo-tabela');
        
        let totalItens = 0;
        let valorTotal = 0;
        
        // Limpa a tabela para não duplicar dados
        corpoTabela.innerHTML = "";

        // Se não tiver nada no carrinho vindo da outra página
        if (carrinho.length === 0) {
            corpoTabela.innerHTML = "<tr><td colspan='5' style='text-align:center; padding: 20px;'>Seu carrinho está vazio! Vá até o cardápio escolher seus lanches.</td></tr>";
        } else {
            // Se tiver dados, percorre cada produto e monta a linha da tabela
            carrinho.forEach(item => {
                const subtotal = item.preco * item.qtd;
                totalItens += item.qtd;
                valorTotal += subtotal;

                const linha = `
                    <tr>
                        <td><img src="${item.foto}" class="img-produto" alt="${item.nome}"></td>
                        <td>${item.nome}</td>
                        <td>${item.categoria}</td>
                        <td>${item.qtd}</td>
                        <td>R$ ${item.preco.toFixed(2).replace('.', ',')}</td>
                    </tr>
                `;
                corpoTabela.innerHTML += linha;
            });
        }

        // Atualiza as informações de resumo mais abaixo na página
        document.getElementById('total-itens').innerText = totalItens;
        document.getElementById('valor-total').innerText = valorTotal.toFixed(2).replace('.', ',');
    }

    // Ação do botão Limpar
    function limparCarrinho() {
        localStorage.removeItem('carrinho'); // Apaga os dados salvos
        carregarDadosDoCarrinho(); // Atualiza a tela na hora
    }

    // Ação do botão Finalizar
    function finalizarPedido() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio! Escolha um item antes de finalizar.");
            return;
        }
        alert("Pedido enviado com sucesso para a cozinha da lanchonete!");
        limparCarrinho();
    }

    // Executa a busca de dados assim que a página termina de carregar
    window.onload = carregarDadosDoCarrinho;
</script>
    
    </>
)

}

export default Carrinho