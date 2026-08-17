import { useState } from "react";
import "./CardProd.css";

function CardProd() {
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
            descricao: "Refrigerante.",
            preco: 8,
            quantidade: 0,
            imagem: "/imagem/guarana.jpg",
        },
    ]);

    const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

    function adicionar(id) {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) =>
                produto.id === id
                    ? {
                          ...produto,
                          quantidade: produto.quantidade + 1,
                      }
                    : produto
            )
        );
    }

    function remover(id) {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) =>
                produto.id === id && produto.quantidade > 0
                    ? {
                          ...produto,
                          quantidade: produto.quantidade - 1,
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
            total + produto.preco * produto.quantidade,
        0
    );

    const quantidadeTotal = produtos.reduce(
        (total, produto) =>
            total + produto.quantidade,
        0
    );


    // FINALIZAR PEDIDO
    function finalizarPedido() {

        if (produtosPedido.length === 0) {
            alert(
                "Adicione pelo menos um produto ao pedido."
            );

            return;
        }

        // Salva somente os produtos escolhidos
        localStorage.setItem(
            "pedidoFinalizado",
            JSON.stringify(produtosPedido)
        );

        // Salva o valor total
        localStorage.setItem(
            "totalPedido",
            totalPedido.toString()
        );

        setPedidoFinalizado(true);
    }


    function limparPedido() {
        setProdutos((produtosAtuais) =>
            produtosAtuais.map((produto) => ({
                ...produto,
                quantidade: 0,
            }))
        );

        setPedidoFinalizado(false);
    }


    function novoPedido() {
        limparPedido();

        localStorage.removeItem("pedidoFinalizado");
        localStorage.removeItem("totalPedido");
    }


    return (
        <div className="container-produtos">

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
                                    adicionar(produto.id)
                                }
                            >
                                Adicionar
                            </button>

                            <button
                                onClick={() =>
                                    remover(produto.id)
                                }
                            >
                                Remover
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* RESUMO */}

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
                                        key={produto.id}
                                    >

                                        <td>
                                            {produto.nome}
                                        </td>

                                        <td>
                                            {produto.quantidade}
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


                <div className="quantidade-total">

                    <strong>
                        Quantidade de itens:{" "}
                        {quantidadeTotal}
                    </strong>

                </div>


                <div className="total-final">

                    <strong>
                        Total: R${" "}
                        {totalPedido.toFixed(2)}
                    </strong>

                </div>


                <div className="acoes-pedido">

                    <button
                        className="btn-finalizar"
                        onClick={finalizarPedido}
                        disabled={
                            produtosPedido.length === 0
                        }
                    >
                        Finalizar Pedido
                    </button>

                    <button
                        className="btn-limpar"
                        onClick={limparPedido}
                        disabled={
                            produtosPedido.length === 0
                        }
                    >
                        Limpar Pedido
                    </button>

                </div>


                {pedidoFinalizado && (

                    <div className="pedido-finalizado">

                        <h2>
                            Pedido Finalizado!
                        </h2>

                        <p>
                            Os produtos foram enviados
                            para o carrinho.
                        </p>

                        <p>
                            Total:
                            <strong>
                                {" "}R${" "}
                                {totalPedido.toFixed(2)}
                            </strong>
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default CardProd;



// import { useState } from "react";
// import "./CardProd.css";

// function CardProd() {
//     const [produtos, setProdutos] = useState([
//         {
//             id: 1,
//             nome: "X-Salada",
//             descricao:
//                 "Pão, hambúrguer, queijo, alface, tomate e maionese.",
//             preco: 12,
//             quantidade: 0,
//             imagem: "/imagem/x-salada.jpg",
//         },

//         {
//             id: 2,
//             nome: "X-Bacon",
//             descricao:
//                 "Hambúrguer, bacon crocante, queijo e molho especial.",
//             preco: 15,
//             quantidade: 0,
//             imagem: "/imagem/x-bacon.jpg",
//         },

//         {
//             id: 3,
//             nome: "X-Tudo",
//             descricao:
//                 "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",
//             preco: 18,
//             quantidade: 0,
//             imagem: "/imagem/x-tudo.jpg",
//         },

//         {
//             id: 4,
//             nome: "Batata Frita",
//             descricao:
//                 "Porção de batatas crocantes e salgadas.",
//             preco: 12,
//             quantidade: 0,
//             imagem: "/imagem/batata-frita.jpg",
//         },

//         {
//             id: 5,
//             nome: "Hot Dog",
//             descricao:
//                 "Pão, salsicha, milho, batata palha e molho.",
//             preco: 8,
//             quantidade: 0,
//             imagem: "/imagem/hot-dog.jpg",
//         },

//         {
//             id: 6,
//             nome: "Guaraná",
//             descricao:
//                 "Refrigerante.",
//             preco: 8,
//             quantidade: 0,
//             imagem: "/imagem/guarana.jpg",
//         },
//     ]);

//     const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

//     function adicionar(id) {
//         setProdutos((produtosAtuais) =>
//             produtosAtuais.map((produto) =>
//                 produto.id === id
//                     ? {
//                           ...produto,
//                           quantidade: produto.quantidade + 1,
//                       }
//                     : produto
//             )
//         );
//     }

//     function remover(id) {
//         setProdutos((produtosAtuais) =>
//             produtosAtuais.map((produto) =>
//                 produto.id === id && produto.quantidade > 0
//                     ? {
//                           ...produto,
//                           quantidade: produto.quantidade - 1,
//                       }
//                     : produto
//             )
//         );
//     }

//     function limparPedido() {
//         setProdutos((produtosAtuais) =>
//             produtosAtuais.map((produto) => ({
//                 ...produto,
//                 quantidade: 0,
//             }))
//         );

//         setPedidoFinalizado(false);
//     }

//     const produtosPedido = produtos.filter(
//         (produto) => produto.quantidade > 0
//     );

//     const totalPedido = produtos.reduce(
//         (total, produto) =>
//             total + produto.preco * produto.quantidade,
//         0
//     );

//     const quantidadeTotal = produtos.reduce(
//         (total, produto) => total + produto.quantidade,
//         0
//     );

//     function finalizarPedido() {
//         if (produtosPedido.length === 0) {
//             alert("Adicione pelo menos um produto ao pedido.");
//             return;
//         }

//         setPedidoFinalizado(true);
//     }

//     function novoPedido() {
//         limparPedido();
//     }

//     return (
//         <div className="container-produtos">

//             {/* LISTA DE PRODUTOS */}

//             <div className="lista-produtos">

//                 {produtos.map((produto) => (
//                     <div
//                         className="card-produto"
//                         key={produto.id}
//                     >

//                         <img
//                             src={produto.imagem}
//                             alt={produto.nome}
//                             className="imagem-produto"
//                         />

//                         <h2>
//                             {produto.nome}
//                         </h2>

//                         <p>
//                             {produto.descricao}
//                         </p>

//                         <h4>
//                             Preço: R${" "}
//                             {produto.preco.toFixed(2)}
//                         </h4>

//                         <h4>
//                             Quantidade:{" "}
//                             {produto.quantidade}
//                         </h4>

//                         <div className="botoes">

//                             <button
//                                 onClick={() =>
//                                     adicionar(produto.id)
//                                 }
//                             >
//                                 Adicionar
//                             </button>

//                             <button
//                                 onClick={() =>
//                                     remover(produto.id)
//                                 }
//                             >
//                                 Remover
//                             </button>

//                         </div>

//                     </div>
//                 ))}

//             </div>


//             {/* RESUMO DO PEDIDO */}

//             <div className="resumo">

//                 <h2>
//                     Resumo do Pedido
//                 </h2>

//                 {produtosPedido.length === 0 ? (

//                     <p className="pedido-vazio">
//                         Nenhum produto adicionado.
//                     </p>

//                 ) : (

//                     <table className="tabela-pedido">

//                         <thead>
//                             <tr>
//                                 <th>Produto</th>
//                                 <th>Qtd.</th>
//                                 <th>Valor</th>
//                                 <th>Subtotal</th>
//                             </tr>
//                         </thead>

//                         <tbody>

//                             {produtosPedido.map((produto) => (

//                                 <tr key={produto.id}>

//                                     <td>
//                                         {produto.nome}
//                                     </td>

//                                     <td>
//                                         {produto.quantidade}
//                                     </td>

//                                     <td>
//                                         R${" "}
//                                         {produto.preco.toFixed(2)}
//                                     </td>

//                                     <td>
//                                         R${" "}
//                                         {(
//                                             produto.preco *
//                                             produto.quantidade
//                                         ).toFixed(2)}
//                                     </td>

//                                 </tr>

//                             ))}

//                         </tbody>

//                     </table>

//                 )}


//                 {/* QUANTIDADE TOTAL */}

//                 <div className="quantidade-total">

//                     <strong>
//                         Quantidade de itens:{" "}
//                         {quantidadeTotal}
//                     </strong>

//                 </div>


//                 {/* TOTAL */}

//                 <div className="total-final">

//                     <strong>
//                         Total: R${" "}
//                         {totalPedido.toFixed(2)}
//                     </strong>

//                 </div>


//                 {/* BOTÕES DO PEDIDO */}

//                 <div className="acoes-pedido">

//                     <button
//                         className="btn-finalizar"
//                         onClick={finalizarPedido}
//                         disabled={
//                             produtosPedido.length === 0
//                         }
//                     >
//                         Finalizar Pedido
//                     </button>

//                     <button
//                         className="btn-limpar"
//                         onClick={limparPedido}
//                         disabled={
//                             produtosPedido.length === 0
//                         }
//                     >
//                         Limpar Pedido
//                     </button>

//                 </div>


//                 {/* PEDIDO FINALIZADO */}

//                 {pedidoFinalizado && (

//                     <div className="pedido-finalizado">

//                         <h2>
//                             Pedido Finalizado!
//                         </h2>

//                         <p>
//                             Seu pedido foi registrado
//                             com sucesso.
//                         </p>

//                         <p>
//                             Total do pedido:
//                             <strong>
//                                 {" "}R${" "}
//                                 {totalPedido.toFixed(2)}
//                             </strong>
//                         </p>

//                         <button
//                             className="btn-novo-pedido"
//                             onClick={novoPedido}
//                         >
//                             Fazer Novo Pedido
//                         </button>

//                     </div>

//                 )}

//             </div>

//         </div>
//     );
// }

// export default CardProd;


// // import { useState } from "react";
// // import "./CardProd.css";

// // function CardProd() {

// //     const [produtos, setProdutos] = useState([
// //         {
// //             nome: "X-Salada",
// //             descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese.",
// //             preco: 12,
// //             quantidade: 0,
// //             imagem: "/imagem/x-salada.jpg",
// //         },

// //         {
// //             nome: "X-Bacon",
// //             descricao: "Hambúrguer, bacon crocante, queijo e molho especial.",
// //             preco: 15,
// //             quantidade: 0,
// //             imagem: "/imagem/x-bacon.jpg",
// //         },

// //         {
// //             nome: "X-Tudo",
// //             descricao: "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",
// //             preco: 18,
// //             quantidade: 0,
// //             imagem: "/imagem/x-tudo.jpg",
// //         },

// //         {
// //             nome: "Batata Frita",
// //             descricao: "Porção de batatas crocantes e salgadas.",
// //             preco: 12,
// //             quantidade: 0,
// //             imagem: "/imagem/batata-frita.jpg",
// //         },

// //         {
// //             nome: "Hot Dog",
// //             descricao: "Pão, salsicha, milho, batata palha e molho.",
// //             preco: 8,
// //             quantidade: 0,
// //             imagem: "/imagem/hot-dog.jpg",
// //         },

// //         {
// //             nome: "Guaraná",
// //             descricao: "Refrigerante",
// //             preco: 8,
// //             quantidade: 0,
// //             imagem: "/imagem/guarana.jpg",
// //         },
// //     ]);


// //     function adicionar(index) {

// //         const lista = [...produtos];

// //         lista[index].quantidade += 1;

// //         setProdutos(lista);
// //     }


// //     function remover(index) {

// //         const lista = [...produtos];

// //         if (lista[index].quantidade > 0) {
// //             lista[index].quantidade -= 1;
// //         }

// //         setProdutos(lista);
// //     }


// //     const totalPedido = produtos.reduce(
// //         (total, produto) =>
// //             total + produto.preco * produto.quantidade,
// //         0
// //     );


// //     // Produtos que foram adicionados ao pedido
// //     const produtosPedido = produtos.filter(
// //         (produto) => produto.quantidade > 0
// //     );


// //     return (

// //         <div className="container-produtos">

// //             <div className="lista-produtos">

// //                 {produtos.map((produto, index) => (

// //                     <div className="card-produto" key={index}>

// //                         <img
// //                             src={produto.imagem}
// //                             alt={produto.nome}
// //                             className="imagem-produto"
// //                         />

// //                         <h2>
// //                             {produto.nome}
// //                         </h2>

// //                         <p>
// //                             {produto.descricao}
// //                         </p>

// //                         <h4>
// //                             Preço: R$ {produto.preco.toFixed(2)}
// //                         </h4>

// //                         <h4>
// //                             Quantidade: {produto.quantidade}
// //                         </h4>

// //                         <div className="botoes">

// //                             <button
// //                                 onClick={() => adicionar(index)}
// //                             >
// //                                 Adicionar
// //                             </button>

// //                             <button
// //                                 onClick={() => remover(index)}
// //                             >
// //                                 Remover
// //                             </button>

// //                         </div>

// //                     </div>

// //                 ))}

// //             </div>


// //             {/* RESUMO DO PEDIDO */}

// //             <div className="resumo">

// //                 <h2>
// //                     Total do Pedido
// //                 </h2>


// //                 {produtosPedido.length === 0 ? (

// //                     <p className="pedido-vazio">
// //                         Nenhum produto adicionado.
// //                     </p>

// //                 ) : (

// //                     <table className="tabela-pedido">

// //                         <thead>

// //                             <tr>
// //                                 <th>Produto</th>
// //                                 <th>Qtd.</th>
// //                                 <th>Valor</th>
// //                                 <th>Subtotal</th>
// //                             </tr>

// //                         </thead>


// //                         <tbody>

// //                             {produtosPedido.map((produto, index) => (

// //                                 <tr key={index}>

// //                                     <td>
// //                                         {produto.nome}
// //                                     </td>

// //                                     <td>
// //                                         {produto.quantidade}
// //                                     </td>

// //                                     <td>
// //                                         R$ {produto.preco.toFixed(2)}
// //                                     </td>

// //                                     <td>
// //                                         R${" "}
// //                                         {(
// //                                             produto.preco *
// //                                             produto.quantidade
// //                                         ).toFixed(2)}
// //                                     </td>

// //                                 </tr>

// //                             ))}

// //                         </tbody>

// //                     </table>

// //                 )}


// //                 <div className="total-final">

// //                     <strong>
// //                         Total: R$ {totalPedido.toFixed(2)}
// //                     </strong>

// //                 </div>
                

// //             </div>

// //         </div>

// //     );
// // }


// // export default CardProd;
