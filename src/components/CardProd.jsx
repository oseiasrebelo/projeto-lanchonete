import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardProd.css";

function CardProd() {

    const navigate = useNavigate();

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "X-Salada",
            descricao:
                "Pão, hambúrguer, queijo, alface, tomate e maionese.",
            preco: 12,
            quantidade: 0,
            imagem: "/imagem/x-salada.jpg",
        },

        {
            id: 2,
            nome: "X-Bacon",
            descricao:
                "Hambúrguer, bacon crocante, queijo e molho especial.",
            preco: 15,
            quantidade: 0,
            imagem: "/imagem/x-bacon.jpg",
        },

        {
            id: 3,
            nome: "X-Tudo",
            descricao:
                "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",
            preco: 18,
            quantidade: 0,
            imagem: "/imagem/x-tudo.jpg",
        },

        {
            id: 4,
            nome: "Batata Frita",
            descricao:
                "Porção de batatas crocantes e salgadas.",
            preco: 12,
            quantidade: 0,
            imagem: "/imagem/batata-frita.jpg",
        },

        {
            id: 5,
            nome: "Hot Dog",
            descricao:
                "Pão, salsicha, milho, batata palha e molho.",
            preco: 8,
            quantidade: 0,
            imagem: "/imagem/hot-dog.jpg",
        },

        {
            id: 6,
            nome: "Guaraná",
            descricao:
                "Refrigerante 2L",
            preco: 8,
            quantidade: 0,
            imagem: "/imagem/guarana.jpg",
        },
        {
            id: 7,
            nome: "Refrigerante Lata",
            descricao:
                "Fanta Uva 350ml ",
            preco: 6,
            quantidade: 0,
            imagem: "/imagem/fanta-uva.jpg",
        },
        {
            id: 8,
            nome: "Refrigerante Lata",
            descricao:
                "Fanta Laranja 350ml",
            preco: 6,
            quantidade: 0,
            imagem: "/imagem/fanta-laranja.jpg",
        },
    ]);

    function adicionar(id) {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) =>
                produto.id === id
                    ? {
                          ...produto,
                          quantidade:
                              produto.quantidade + 1,
                      }
                    : produto
            )
        );
    }

    function remover(id) {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) =>
                produto.id === id &&
                produto.quantidade > 0
                    ? {
                          ...produto,
                          quantidade:
                              produto.quantidade - 1,
                      }
                    : produto
            )
        );
    }

    const produtosPedido = produtos.filter(
        (produto) => produto.quantidade > 0
    );

    const totalPedido = produtos.reduce(
        (total, produto) =>
            total +
            produto.preco * produto.quantidade,
        0
    );

    const quantidadeTotal = produtos.reduce(
        (total, produto) =>
            total + produto.quantidade,
        0
    );

    // IR PARA O CARRINHO
    function irParaCarrinho() {

        if (produtosPedido.length === 0) {
            alert(
                "Adicione pelo menos um produto ao pedido."
            );

            return;
        }

        // Salva os produtos escolhidos
        localStorage.setItem(
            "pedidoFinalizado",
            JSON.stringify(produtosPedido)
        );

        // Salva o total
        localStorage.setItem(
            "totalPedido",
            totalPedido.toString()
        );

        // Vai para a página Carrinho
        navigate("/carrinho");
    }

    function limparPedido() {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) => ({
                ...produto,
                quantidade: 0,
            }))
        );
    }

    return (
        <div className="container-produtos">

            {/* LISTA DE PRODUTOS */}

            <div className="lista-produtos">

                {produtos.map((produto) => (

                    <div
                        className="card-produto"
                        key={produto.id}
                    >

                        <img
                            src={produto.imagem}
                            alt={produto.nome}
                            className="imagem-produto"
                        />

                        <h2>
                            {produto.nome}
                        </h2>

                        <p>
                            {produto.descricao}
                        </p>

                        <h4>
                            Preço: R${" "}
                            {produto.preco.toFixed(2)}
                        </h4>

                        <h4>
                            Quantidade:{" "}
                            {produto.quantidade}
                        </h4>

                        <div className="botoes">

                            <button
                                onClick={() =>
                                    adicionar(
                                        produto.id
                                    )
                                }
                            >
                                Adicionar
                            </button>

                            <button
                                onClick={() =>
                                    remover(
                                        produto.id
                                    )
                                }
                            >
                                Remover
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* RESUMO DO PEDIDO */}

            <div className="resumo">

                <h2>
                    Resumo do Pedido
                </h2>

                {produtosPedido.length === 0 ? (

                    <p className="pedido-vazio">
                        Nenhum produto adicionado.
                    </p>

                ) : (

                    <table className="tabela-pedido">

                        <thead>

                            <tr>
                                <th>Produto</th>
                                <th>Qtd.</th>
                                <th>Valor</th>
                                <th>Subtotal</th>
                            </tr>

                        </thead>

                        <tbody>

                            {produtosPedido.map(
                                (produto) => (

                                    <tr
                                        key={
                                            produto.id
                                        }
                                    >

                                        <td>
                                            {
                                                produto.nome
                                            }
                                        </td>

                                        <td>
                                            {
                                                produto.quantidade
                                            }
                                        </td>

                                        <td>
                                            R${" "}
                                            {produto.preco.toFixed(
                                                2
                                            )}
                                        </td>

                                        <td>
                                            R${" "}
                                            {(
                                                produto.preco *
                                                produto.quantidade
                                            ).toFixed(
                                                2
                                            )}
                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                )}


                {/* QUANTIDADE */}

                <div className="quantidade-total">

                    <strong>
                        Quantidade de itens:{" "}
                        {quantidadeTotal}
                    </strong>

                </div>


                {/* TOTAL */}

                <div className="total-final">

                    <strong>
                        Total: R${" "}
                        {totalPedido.toFixed(2)}
                    </strong>

                </div>


                {/* BOTÕES */}

                <div className="acoes-pedido">

                    <button
                        className="btn-finalizar"
                        onClick={
                            irParaCarrinho
                        }
                        disabled={
                            produtosPedido.length === 0
                        }
                    >
                        Ir para Carrinho
                    </button>


                    <button
                        className="btn-limpar"
                        onClick={
                            limparPedido
                        }
                        disabled={
                            produtosPedido.length === 0
                        }
                    >
                        Limpar Pedido
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CardProd;
