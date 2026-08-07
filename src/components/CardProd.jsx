import { useState } from "react";
import "./CardProd.css";

function CardProd() {

    const [produtos, setProdutos] = useState([
        {
            nome: "X-Salada",
            descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese.",
            preco: 18,
            quantidade: 0,
            imagem: "/imagem/x-salada.jpg",
        },

        {
            nome: "X-Bacon",
            descricao: "Hambúrguer, bacon crocante, queijo e molho especial.",
            preco: 22,
            quantidade: 0,
            imagem: "/imagem/x-bacon.jpg",
        },

        {
            nome: "X-Tudo",
            descricao: "Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.",
            preco: 28,
            quantidade: 0,
            imagem: "/imagem/x-tudo.jpg",
        },

        {
            nome: "Batata Frita",
            descricao: "Porção de batatas crocantes e salgadas.",
            preco: 12,
            quantidade: 0,
            imagem: "/imagem/batata-frita.jpg",
        },

        {
            nome: "Hot Dog",
            descricao: "Pão, salsicha, milho, batata palha e molho.",
            preco: 10,
            quantidade: 0,
            imagem: "/imagem/hot-dog.jpg",
        },

        {
            nome: "Guaraná",
            descricao: "Refrigerante",
            preco: 8,
            quantidade: 0,
            imagem: "/imagem/guarana.jpg",
        },
    ]);



    function adicionar(index) {

        const lista = [...produtos];

        lista[index].quantidade += 1;

        setProdutos(lista);

    }



    function remover(index) {

        const lista = [...produtos];


        if (lista[index].quantidade > 0) {

            lista[index].quantidade -= 1;

        }


        setProdutos(lista);

    }



    const totalPedido = produtos.reduce(
        (total, produto) =>
            total + produto.preco * produto.quantidade,
        0
    );



    return (

        <div className="container-produtos">


            <div className="lista-produtos">


                {produtos.map((produto, index) => (

                    <div className="card-produto" key={index}>


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
                            Preço: R$ {produto.preco.toFixed(2)}
                        </h4>


                        <h4>
                            Quantidade: {produto.quantidade}
                        </h4>



                        <div className="botoes">


                            <button
                                onClick={() => adicionar(index)}
                            >
                                Adicionar
                            </button>


                            <button
                                onClick={() => remover(index)}
                            >
                                Remover
                            </button>


                        </div>


                    </div>

                ))}


            </div>



            <div className="resumo">

                <h2>
                    Total do Pedido
                </h2>


                <h3>
                    R$ {totalPedido.toFixed(2)}
                </h3>


            </div>


        </div>

    );

}


export default CardProd;