import Header from "../components/Header";
import { useEffect, useState } from "react";
import "./Carrinho.css";

function Carrinho() {

    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {

        const pedidoSalvo =
            localStorage.getItem("pedidoFinalizado");

        const totalSalvo =
            localStorage.getItem("totalPedido");


        if (pedidoSalvo) {

            setProdutos(
                JSON.parse(pedidoSalvo)
            );

        }


        if (totalSalvo) {

            setTotal(
                Number(totalSalvo)
            );

        }

    }, []);


    function limparCarrinho() {

        localStorage.removeItem(
            "pedidoFinalizado"
        );

        localStorage.removeItem(
            "totalPedido"
        );

        setProdutos([]);
        setTotal(0);
    }


    return (
        

        <div className="pagina-carrinho">
            <Header />

            <div className="carrinho-container">

                <h1>
                    Meu Carrinho
                </h1>


                {produtos.length === 0 ? (

                    <div className="carrinho-vazio">

                        <h2>
                            Nenhum pedido finalizado
                        </h2>

                        <p>
                            Adicione produtos e finalize
                            seu pedido primeiro.
                        </p>

                    </div>

                ) : (

                    <>

                        <div className="tabela-container">

                            <table className="tabela-carrinho">

                                <thead>

                                    <tr>

                                        <th>
                                            Produto
                                        </th>

                                        <th>
                                            Quantidade
                                        </th>

                                        <th>
                                            Preço
                                        </th>

                                        <th>
                                            Total
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {produtos.map(
                                        (produto) => (

                                            <tr
                                                key={
                                                    produto.id
                                                }
                                            >

                                                <td>

                                                    <div className="produto-carrinho">

                                                        <img
                                                            src={
                                                                produto.imagem
                                                            }
                                                            alt={
                                                                produto.nome
                                                            }
                                                        />

                                                        <span>
                                                            {
                                                                produto.nome
                                                            }
                                                        </span>

                                                    </div>

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

                        </div>


                        {/* RESUMO FINAL */}

                        <div className="resumo-carrinho">

                            <div className="quantidade-carrinho">

                                <span>
                                    Quantidade de itens:
                                </span>

                                <strong>
                                    {produtos.reduce(
                                        (
                                            total,
                                            produto
                                        ) =>
                                            total +
                                            produto.quantidade,
                                        0
                                    )}
                                </strong>

                            </div>


                            <div className="total-carrinho">

                                <span>
                                    Total do Pedido:
                                </span>

                                <strong>
                                    R${" "}
                                    {total.toFixed(2)}
                                </strong>

                            </div>


                            <div className="acoes-carrinho">

                                <button
                                    className="btn-limpar-carrinho"
                                    onClick={
                                        limparCarrinho
                                    }
                                >
                                    Limpar Carrinho
                                </button>

                            </div>

                        </div>

                    </>

                )}

            </div>

        </div>

    );
}

export default Carrinho;