import Header from "../components/Header";
import { useEffect, useState } from "react";
import "./Pedidos.css";

function Pedidos() {

    const [pedido, setPedido] = useState(null);

    const [status, setStatus] =
        useState("Recebido");


    // CARREGAR PEDIDO
    useEffect(() => {

        // O Pedidos.jsx procura SOMENTE
        // por pedidos que já foram finalizados
        const pedidoCozinhaSalvo =
            localStorage.getItem("pedidoCozinha");


        if (!pedidoCozinhaSalvo) {
            return;
        }


        try {

            const pedidoExistente =
                JSON.parse(pedidoCozinhaSalvo);


            setPedido(
                pedidoExistente
            );


            setStatus(
                pedidoExistente.status ||
                "Recebido"
            );


        } catch (erro) {

            console.error(
                "Erro ao carregar pedido:",
                erro
            );

        }

    }, []);


    // ALTERAR STATUS
    function alterarStatus(novoStatus) {

        setStatus(
            novoStatus
        );


        if (pedido) {

            const pedidoAtualizado = {

                ...pedido,

                status: novoStatus,

            };


            setPedido(
                pedidoAtualizado
            );


            localStorage.setItem(
                "pedidoCozinha",
                JSON.stringify(
                    pedidoAtualizado
                )
            );

        }

    }


    // LIMPAR PEDIDO
    function limparPedido() {

        localStorage.removeItem(
            "pedidoCozinha"
        );


        localStorage.removeItem(
            "pedidoEmProducao"
        );


        setPedido(null);


        setStatus(
            "Recebido"
        );

    }


    // SE NÃO EXISTIR PEDIDO
    if (!pedido) {

        return (

            <>

                <Header />


                <main className="pagina-pedidos">

                    <h1>
                        Painel de Controle da Cozinha
                    </h1>


                    <div className="pedido-card">

                        <div className="sem-pedido">

                            <h2>
                                Nenhum pedido recebido
                            </h2>


                            <p>
                                Os pedidos finalizados
                                aparecerão aqui.
                            </p>

                        </div>

                    </div>

                </main>

            </>

        );

    }


    return (

        <>

            <Header />


            <main className="pagina-pedidos">

                <h1>
                    Painel de Controle da Cozinha
                </h1>


                {/* CARD DO PEDIDO */}

                <div className="pedido-card">


                    {/* CABEÇALHO */}

                    <div className="pedido-header">

                        <h2 className="pedido-numero">

                            PEDIDO #
                            {pedido.numero}

                        </h2>


                        <div className="pedido-meta">

                            <p>

                                <strong>
                                    Mesa:
                                </strong>


                                <span>
                                    {pedido.mesa}
                                </span>

                            </p>


                            <p>

                                <strong>
                                    Horário:
                                </strong>


                                <span>
                                    {pedido.horario}
                                </span>

                            </p>

                        </div>

                    </div>


                    {/* ITENS DO PEDIDO */}

                    <div className="itens-container">

                        <h3>
                            Itens do Pedido
                        </h3>


                        <ul className="itens-lista">

                            {pedido.produtos.map(
                                (produto) => (

                                    <li
                                        key={
                                            produto.id
                                        }
                                        className="item-pedido"
                                    >

                                        <img
                                            src={
                                                produto.imagem
                                            }
                                            alt={
                                                produto.nome
                                            }
                                        />


                                        <div className="item-info">

                                            <strong>
                                                {
                                                    produto.nome
                                                }
                                            </strong>


                                            <span>

                                                Quantidade:{" "}

                                                {
                                                    produto.quantidade
                                                }

                                            </span>

                                        </div>


                                        <strong className="item-subtotal">

                                            R${" "}

                                            {(
                                                produto.preco *
                                                produto.quantidade
                                            ).toFixed(
                                                2
                                            )}

                                        </strong>

                                    </li>

                                )
                            )}

                        </ul>

                    </div>


                    {/* TOTAL */}

                    <div className="pedido-total">

                        <span>
                            Total do Pedido:
                        </span>


                        <strong>
                            R${" "}
                            {pedido.total.toFixed(2)}
                        </strong>

                    </div>


                    {/* STATUS */}

                    <div className="status-container">

                        <div className="status-titulo">
                            Status
                        </div>


                        <span
                            className={
                                `status-badge status-${
                                    status
                                        .toLowerCase()
                                        .replace(
                                            " ",
                                            "-"
                                        )
                                }`
                            }
                        >
                            [ {status} ]
                        </span>

                    </div>


                    {/* RODAPÉ */}

                    <div className="pedido-footer">

                        senaipr.org.br
                        <br />

                        Rua Senador Accioly Filho, 298 |
                        Cidade Industrial de Curitiba
                        <br />

                        81310-000 | Curitiba - PR |
                        (41) 3271-7100

                    </div>

                </div>


                {/* CONTROLE DE STATUS */}

                <div className="controle-paineis">

                    <h3>
                        Alterar Status do Pedido
                    </h3>


                    <div className="botoes-status">

                        <button
                            className="btn-status btn-rec"
                            onClick={() =>
                                alterarStatus(
                                    "Recebido"
                                )
                            }
                        >
                            Recebido
                        </button>


                        <button
                            className="btn-status btn-prep"
                            onClick={() =>
                                alterarStatus(
                                    "Preparando"
                                )
                            }
                        >
                            Preparando
                        </button>


                        <button
                            className="btn-status btn-pronto"
                            onClick={() =>
                                alterarStatus(
                                    "Pronto"
                                )
                            }
                        >
                            Pronto
                        </button>


                        <button
                            className="btn-status btn-ent"
                            onClick={() =>
                                alterarStatus(
                                    "Entregue"
                                )
                            }
                        >
                            Entregue
                        </button>

                    </div>

                </div>


                {/* FLUXOGRAMA */}

                <div className="fluxograma">

                    <p>
                        STATUS DO PEDIDO
                    </p>


                    <span
                        className={
                            status === "Recebido"
                                ? "fluxo ativo"
                                : "fluxo"
                        }
                    >
                        Recebido
                    </span>


                    <br />
                    │
                    <br />
                    ▼
                    <br />


                    <span
                        className={
                            status === "Preparando"
                                ? "fluxo ativo"
                                : "fluxo"
                        }
                    >
                        Preparando
                    </span>


                    <br />
                    │
                    <br />
                    ▼
                    <br />


                    <span
                        className={
                            status === "Pronto"
                                ? "fluxo ativo"
                                : "fluxo"
                        }
                    >
                        Pronto
                    </span>


                    <br />
                    │
                    <br />
                    ▼
                    <br />


                    <span
                        className={
                            status === "Entregue"
                                ? "fluxo ativo"
                                : "fluxo"
                        }
                    >
                        Entregue
                    </span>

                </div>


                {/* LIMPAR PEDIDO */}

                <div className="area-limpar">

                    <button
                        className="btn-limpar-pedido"
                        onClick={
                            limparPedido
                        }
                    >
                        Finalizar e Limpar Pedido
                    </button>

                </div>

            </main>

        </>

    );

}

export default Pedidos;



// import Header from "../components/Header";
// import { useEffect, useState } from "react";
// import "./Pedidos.css";

// function Pedidos() {
//     const [pedido, setPedido] = useState(null);

//     const [status, setStatus] = useState("Recebido");


//     // CARREGAR PEDIDO
//     useEffect(() => {
//         const pedidoSalvo =
//             localStorage.getItem("pedidoFinalizado");

//         const totalSalvo =
//             localStorage.getItem("totalPedido");

//         if (pedidoSalvo) {
//             try {
//                 const produtos = JSON.parse(pedidoSalvo);

//                 const total = Number(totalSalvo) || 0;

//                 // Verifica se já existe um pedido salvo
//                 const pedidoCozinhaSalvo =
//                     localStorage.getItem("pedidoCozinha");

//                 if (pedidoCozinhaSalvo) {
//                     const pedidoExistente =
//                         JSON.parse(pedidoCozinhaSalvo);

//                     setPedido(pedidoExistente);
//                     setStatus(
//                         pedidoExistente.status || "Recebido"
//                     );
//                 } else {
//                     // Cria um novo pedido
//                     const novoPedido = {
//                         numero: Math.floor(
//                             1000 + Math.random() * 9000
//                         ),

//                         horario:
//                             new Date().toLocaleTimeString(
//                                 "pt-BR",
//                                 {
//                                     hour: "2-digit",
//                                     minute: "2-digit",
//                                 }
//                             ),

//                         mesa: "--",

//                         produtos: produtos,

//                         total: total,

//                         status: "Recebido",
//                     };

//                     localStorage.setItem(
//                         "pedidoCozinha",
//                         JSON.stringify(novoPedido)
//                     );

//                     setPedido(novoPedido);
//                     setStatus("Recebido");
//                 }
//             } catch (erro) {
//                 console.error(
//                     "Erro ao carregar pedido:",
//                     erro
//                 );
//             }
//         }
//     }, []);


//     // ALTERAR STATUS
//     function alterarStatus(novoStatus) {
//         setStatus(novoStatus);

//         if (pedido) {
//             const pedidoAtualizado = {
//                 ...pedido,
//                 status: novoStatus,
//             };

//             setPedido(pedidoAtualizado);

//             localStorage.setItem(
//                 "pedidoCozinha",
//                 JSON.stringify(pedidoAtualizado)
//             );
//         }
//     }


//     // LIMPAR PEDIDO
//     function limparPedido() {
//         localStorage.removeItem("pedidoFinalizado");
//         localStorage.removeItem("totalPedido");
//         localStorage.removeItem("pedidoCozinha");

//         setPedido(null);
//         setStatus("Recebido");
//     }


//     // SE NÃO EXISTIR PEDIDO
//     if (!pedido) {
//         return (
//             <>
//                 <Header />

//                 <main className="pagina-pedidos">

//                     <h1>
//                         Painel de Controle da Cozinha
//                     </h1>

//                     <div className="pedido-card">

//                         <div className="sem-pedido">

//                             <h2>
//                                 Nenhum pedido recebido
//                             </h2>

//                             <p>
//                                 Os pedidos finalizados
//                                 aparecerão aqui.
//                             </p>

//                         </div>

//                     </div>

//                 </main>
//             </>
//         );
//     }


//     return (
//         <>
//             <Header />

//             <main className="pagina-pedidos">

//                 <h1>
//                     Painel de Controle da Cozinha
//                 </h1>


//                 {/* CARD DO PEDIDO */}

//                 <div className="pedido-card">


//                     {/* CABEÇALHO */}

//                     <div className="pedido-header">

//                         <h2 className="pedido-numero">

//                             PEDIDO #
//                             {pedido.numero}

//                         </h2>


//                         <div className="pedido-meta">

//                             <p>
//                                 <strong>
//                                     Mesa:
//                                 </strong>

//                                 <span>
//                                     {pedido.mesa}
//                                 </span>
//                             </p>


//                             <p>
//                                 <strong>
//                                     Horário:
//                                 </strong>

//                                 <span>
//                                     {pedido.horario}
//                                 </span>
//                             </p>

//                         </div>

//                     </div>


//                     {/* ITENS DO PEDIDO */}

//                     <div className="itens-container">

//                         <h3>
//                             Itens do Pedido
//                         </h3>


//                         <ul className="itens-lista">

//                             {pedido.produtos.map(
//                                 (produto) => (

//                                     <li
//                                         key={produto.id}
//                                         className="item-pedido"
//                                     >

//                                         <img
//                                             src={
//                                                 produto.imagem
//                                             }
//                                             alt={
//                                                 produto.nome
//                                             }
//                                         />


//                                         <div className="item-info">

//                                             <strong>
//                                                 {produto.nome}
//                                             </strong>

//                                             <span>
//                                                 Quantidade:{" "}
//                                                 {
//                                                     produto.quantidade
//                                                 }
//                                             </span>

//                                         </div>


//                                         <strong className="item-subtotal">

//                                             R${" "}

//                                             {(
//                                                 produto.preco *
//                                                 produto.quantidade
//                                             ).toFixed(2)}

//                                         </strong>

//                                     </li>

//                                 )
//                             )}

//                         </ul>

//                     </div>


//                     {/* TOTAL */}

//                     <div className="pedido-total">

//                         <span>
//                             Total do Pedido:
//                         </span>

//                         <strong>
//                             R${" "}
//                             {pedido.total.toFixed(2)}
//                         </strong>

//                     </div>


//                     {/* STATUS */}

//                     <div className="status-container">

//                         <div className="status-titulo">
//                             Status
//                         </div>


//                         <span
//                             className={`status-badge status-${status
//                                 .toLowerCase()
//                                 .replace(" ", "-")}`}
//                         >
//                             [ {status} ]
//                         </span>

//                     </div>


//                     {/* RODAPÉ */}

//                     <div className="pedido-footer">

//                         senaipr.org.br
//                         <br />

//                         Rua Senador Accioly Filho, 298 |
//                         Cidade Industrial de Curitiba
//                         <br />

//                         81310-000 | Curitiba - PR |
//                         (41) 3271-7100

//                     </div>

//                 </div>


//                 {/* CONTROLE DE STATUS */}

//                 <div className="controle-paineis">

//                     <h3>
//                         Alterar Status do Pedido
//                     </h3>


//                     <div className="botoes-status">

//                         <button
//                             className="btn-status btn-rec"
//                             onClick={() =>
//                                 alterarStatus(
//                                     "Recebido"
//                                 )
//                             }
//                         >
//                             Recebido
//                         </button>


//                         <button
//                             className="btn-status btn-prep"
//                             onClick={() =>
//                                 alterarStatus(
//                                     "Preparando"
//                                 )
//                             }
//                         >
//                             Preparando
//                         </button>


//                         <button
//                             className="btn-status btn-pronto"
//                             onClick={() =>
//                                 alterarStatus(
//                                     "Pronto"
//                                 )
//                             }
//                         >
//                             Pronto
//                         </button>


//                         <button
//                             className="btn-status btn-ent"
//                             onClick={() =>
//                                 alterarStatus(
//                                     "Entregue"
//                                 )
//                             }
//                         >
//                             Entregue
//                         </button>

//                     </div>

//                 </div>


//                 {/* FLUXOGRAMA */}

//                 <div className="fluxograma">

//                     <p>
//                         STATUS DO PEDIDO
//                     </p>


//                     <span
//                         className={
//                             status === "Recebido"
//                                 ? "fluxo ativo"
//                                 : "fluxo"
//                         }
//                     >
//                         Recebido
//                     </span>

//                     <br />
//                     │
//                     <br />
//                     ▼
//                     <br />


//                     <span
//                         className={
//                             status === "Preparando"
//                                 ? "fluxo ativo"
//                                 : "fluxo"
//                         }
//                     >
//                         Preparando
//                     </span>

//                     <br />
//                     │
//                     <br />
//                     ▼
//                     <br />


//                     <span
//                         className={
//                             status === "Pronto"
//                                 ? "fluxo ativo"
//                                 : "fluxo"
//                         }
//                     >
//                         Pronto
//                     </span>

//                     <br />
//                     │
//                     <br />
//                     ▼
//                     <br />


//                     <span
//                         className={
//                             status === "Entregue"
//                                 ? "fluxo ativo"
//                                 : "fluxo"
//                         }
//                     >
//                         Entregue
//                     </span>

//                 </div>


//                 {/* LIMPAR PEDIDO */}

//                 <div className="area-limpar">

//                     <button
//                         className="btn-limpar-pedido"
//                         onClick={limparPedido}
//                     >
//                         Finalizar e Limpar Pedido
//                     </button>

//                 </div>

//             </main>
//         </>
//     );
// }

// export default Pedidos;

