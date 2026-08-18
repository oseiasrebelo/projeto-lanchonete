import Header from "../components/Header";
import { useEffect, useState } from "react";
import "./Carrinho.css";

function Carrinho() {

    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);
    const [compraFinalizada, setCompraFinalizada] = useState(false);


    // CARREGAR CARRINHO
    useEffect(() => {

        const pedidoSalvo =
            localStorage.getItem("pedidoFinalizado");

        const totalSalvo =
            localStorage.getItem("totalPedido");


        if (pedidoSalvo) {

            try {

                const produtosSalvos =
                    JSON.parse(pedidoSalvo);

                setProdutos(produtosSalvos);

            } catch (erro) {

                console.error(
                    "Erro ao carregar produtos:",
                    erro
                );

            }

        }


        if (totalSalvo) {

            setTotal(
                Number(totalSalvo)
            );

        }

    }, []);


    // LIMPAR CARRINHO
    function limparCarrinho() {

        localStorage.removeItem(
            "pedidoFinalizado"
        );

        localStorage.removeItem(
            "totalPedido"
        );

        setProdutos([]);
        setTotal(0);
        setCompraFinalizada(false);
    }


    // FINALIZAR COMPRA
    function finalizarCompra() {

        if (produtos.length === 0) {

            alert(
                "Seu carrinho está vazio."
            );

            return;
        }


        // Cria o pedido somente quando
        // o usuário clicar em Finalizar Compra
        const novoPedido = {

            numero: Math.floor(
                1000 + Math.random() * 9000
            ),

            horario:
                new Date().toLocaleTimeString(
                    "pt-BR",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                    }
                ),

            mesa: "--",

            produtos: produtos,

            total: total,

            status: "Recebido",

        };


        // Envia o pedido para o painel da cozinha
        localStorage.setItem(
            "pedidoCozinha",
            JSON.stringify(novoPedido)
        );


        // Marca que existe um pedido em produção
        localStorage.setItem(
            "pedidoEmProducao",
            "true"
        );


        // Mostra a confirmação no Carrinho
        setCompraFinalizada(true);

    }


    // QUANTIDADE TOTAL
    const quantidadeTotal =
        produtos.reduce(
            (total, produto) =>
                total + produto.quantidade,
            0
        );


    return (

        <div className="pagina-carrinho">

            <Header />


            <div className="carrinho-container">

                <h1>
                    Meu Carrinho
                </h1>


                {compraFinalizada ? (

                    /* PEDIDO FINALIZADO */

                    <div className="compra-finalizada">

                        <div className="icone-sucesso">
                            ✓
                        </div>


                        <h2>
                            Pedido feito!
                        </h2>


                        <p>
                            Seu pedido já está sendo preparado.
                        </p>


                        <p>
                            Agora é só aguardar!
                        </p>


                        <p>
                            Total da compra:
                            <strong>
                                {" "}R${" "}
                                {total.toFixed(2)}
                            </strong>
                        </p>

                    </div>

                ) : produtos.length === 0 ? (

                    /* CARRINHO VAZIO */

                    <div className="carrinho-vazio">

                        <h2>
                            Carrinho vazio
                        </h2>


                        <p>
                            Adicione produtos antes
                            de finalizar sua compra.
                        </p>

                    </div>

                ) : (

                    /* CARRINHO */

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


                        {/* RESUMO */}

                        <div className="resumo-carrinho">

                            <div className="quantidade-carrinho">

                                <span>
                                    Quantidade de itens:
                                </span>


                                <strong>
                                    {quantidadeTotal}
                                </strong>

                            </div>


                            <div className="total-carrinho">

                                <span>
                                    Total da Compra:
                                </span>


                                <strong>
                                    R${" "}
                                    {total.toFixed(2)}
                                </strong>

                            </div>


                            {/* BOTÕES */}

                            <div className="acoes-carrinho">

                                <button
                                    className="btn-finalizar-compra"
                                    onClick={
                                        finalizarCompra
                                    }
                                >
                                    Finalizar Compra
                                </button>


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



// import Header from "../components/Header";
// import { useEffect, useState } from "react";
// import "./Carrinho.css";

// function Carrinho() {

//     const [produtos, setProdutos] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [compraFinalizada, setCompraFinalizada] = useState(false);


//     useEffect(() => {

//         const pedidoSalvo =
//             localStorage.getItem("pedidoFinalizado");

//         const totalSalvo =
//             localStorage.getItem("totalPedido");


//         if (pedidoSalvo) {
//             setProdutos(JSON.parse(pedidoSalvo));
//         }


//         if (totalSalvo) {
//             setTotal(Number(totalSalvo));
//         }

//     }, []);


//     function limparCarrinho() {

//         localStorage.removeItem(
//             "pedidoFinalizado"
//         );

//         localStorage.removeItem(
//             "totalPedido"
//         );

//         localStorage.removeItem(
//             "pedidoEmProducao"
//         );

//         setProdutos([]);
//         setTotal(0);
//         setCompraFinalizada(false);
//     }


//     function finalizarCompra() {

//         if (produtos.length === 0) {

//             alert(
//                 "Seu carrinho está vazio."
//             );

//             return;
//         }

//         // Marca o pedido como enviado para a cozinha
//         localStorage.setItem(
//             "pedidoEmProducao",
//             "true"
//         );

//         // Mostra a mensagem de compra finalizada
//         setCompraFinalizada(true);
//     }


//     const quantidadeTotal = produtos.reduce(
//         (total, produto) =>
//             total + produto.quantidade,
//         0
//     );


//     return (

//         <div className="pagina-carrinho">

//             <Header />

//             <div className="carrinho-container">

//                 <h1>
//                     Meu Carrinho
//                 </h1>


//                 {compraFinalizada ? (

//                     /* COMPRA FINALIZADA */

//                     <div className="compra-finalizada">

//                         <div className="icone-sucesso">
//                             ✓
//                         </div>

//                         <h2>
//                             Pedido feito!
//                         </h2>

//                         <p>
//                             Seu pedido já está sendo preparado,
//                         </p>

//                         <p>
//                             Agora é só aguardar!
//                         </p>

//                         <p>
//                             Total da compra:
//                             <strong>
//                                 {" "}R${" "}
//                                 {total.toFixed(2)}
//                             </strong>
//                         </p>

//                     </div>

//                 ) : produtos.length === 0 ? (

//                     /* CARRINHO VAZIO */

//                     <div className="carrinho-vazio">

//                         <h2>
//                             Carrinho vazio
//                         </h2>

//                         <p>
//                             Adicione produtos antes
//                             de finalizar sua compra.
//                         </p>

//                     </div>

//                 ) : (

//                     /* CARRINHO */

//                     <>

//                         <div className="tabela-container">

//                             <table className="tabela-carrinho">

//                                 <thead>

//                                     <tr>

//                                         <th>
//                                             Produto
//                                         </th>

//                                         <th>
//                                             Quantidade
//                                         </th>

//                                         <th>
//                                             Preço
//                                         </th>

//                                         <th>
//                                             Total
//                                         </th>

//                                     </tr>

//                                 </thead>


//                                 <tbody>

//                                     {produtos.map(
//                                         (produto) => (

//                                             <tr
//                                                 key={
//                                                     produto.id
//                                                 }
//                                             >

//                                                 <td>

//                                                     <div className="produto-carrinho">

//                                                         <img
//                                                             src={
//                                                                 produto.imagem
//                                                             }
//                                                             alt={
//                                                                 produto.nome
//                                                             }
//                                                         />

//                                                         <span>
//                                                             {
//                                                                 produto.nome
//                                                             }
//                                                         </span>

//                                                     </div>

//                                                 </td>


//                                                 <td>
//                                                     {
//                                                         produto.quantidade
//                                                     }
//                                                 </td>


//                                                 <td>
//                                                     R${" "}
//                                                     {produto.preco.toFixed(
//                                                         2
//                                                     )}
//                                                 </td>


//                                                 <td>
//                                                     R${" "}
//                                                     {(
//                                                         produto.preco *
//                                                         produto.quantidade
//                                                     ).toFixed(
//                                                         2
//                                                     )}
//                                                 </td>

//                                             </tr>

//                                         )
//                                     )}

//                                 </tbody>

//                             </table>

//                         </div>


//                         {/* RESUMO */}

//                         <div className="resumo-carrinho">

//                             <div className="quantidade-carrinho">

//                                 <span>
//                                     Quantidade de itens:
//                                 </span>

//                                 <strong>
//                                     {quantidadeTotal}
//                                 </strong>

//                             </div>


//                             <div className="total-carrinho">

//                                 <span>
//                                     Total da Compra:
//                                 </span>

//                                 <strong>
//                                     R${" "}
//                                     {total.toFixed(2)}
//                                 </strong>

//                             </div>


//                             {/* BOTÕES */}

//                             <div className="acoes-carrinho">

//                                 <button
//                                     className="btn-finalizar-compra"
//                                     onClick={
//                                         finalizarCompra
//                                     }
//                                 >
//                                     Finalizar Compra
//                                 </button>


//                                 <button
//                                     className="btn-limpar-carrinho"
//                                     onClick={
//                                         limparCarrinho
//                                     }
//                                 >
//                                     Limpar Carrinho
//                                 </button>

//                             </div>

//                         </div>

//                     </>

//                 )}

//             </div>

//         </div>

//     );
// }

// export default Carrinho;

