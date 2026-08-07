function Pedidos (){
    return (
    <>
    <h1>Painel de Controle da Cozinha</h1>

<!-- Card do Pedido -->
<div class="pedido-card">

    <div class="pedido-header">
        <h2 id="view-pedido-numero" class="pedido-numero">
            PEDIDO #---
        </h2>

        <div class="pedido-meta">
            <p><strong>Mesa:</strong> <span id="view-mesa">--</span></p>
            <p><strong>Horário:</strong> <span id="view-horario">--:--</span></p>
        </div>
    </div>

    <!-- Lista de Itens -->
    <ul id="view-itens" class="itens-lista">
        <li id="aviso-vazio" class="sem-itens-aviso">
            Nenhum item em produção...
        </li>
    </ul>

    <!-- Rodapé -->
    <div class="pedido-footer">
        senaipr.org.br<br>
        Rua Senador Accioly Filho, 298 | Cidade Industrial de Curitiba<br>
        81310-000 | Curitiba - PR | (41) 3271-7100
    </div>

    <!-- Status -->
    <div class="status-container">
        <div class="status-titulo">Status</div>

        <span
            id="status-atual"
            class="status-badge status-aguardando">
            [ Aguardando ]
        </span>
    </div>

</div>

<!-- Controles -->
<div class="controle-paineis">

    <h3 style="color:#888;margin-bottom:10px;">
        Alterar Status do Pedido
    </h3>

    <div class="botoes-status">

        <button
            class="btn-status btn-rec"
            onclick="mudarStatus('Recebido','status-recebido')">
            Recebido
        </button>

        <button
            class="btn-status btn-prep"
            onclick="mudarStatus('Preparando','status-preparando')">
            Preparando
        </button>

        <button
            class="btn-status btn-pronto"
            onclick="mudarStatus('Pronto','status-pronto')">
            Pronto
        </button>

        <button
            class="btn-status btn-ent"
            onclick="mudarStatus('Entregue','status-entregue')">
            Entregue
        </button>

    </div>

</div>

<!-- Fluxograma -->
<div class="fluxograma">

    <p>STATUS</p>

    <span id="fluxo-Recebido">Recebido</span>

    <br>│<br>▼<br>

    <span id="fluxo-Preparando">Preparando</span>

    <br>│<br>▼<br>

    <span id="fluxo-Pronto">Pronto</span>

    <br>│<br>▼<br>

    <span id="fluxo-Entregue">Entregue</span>

</div>

<script>

    function preencherDadosDoPedido() {

        const pedidos =
            JSON.parse(localStorage.getItem("pedidos")) || [];

        if (pedidos.length === 0) {

            document.getElementById("view-pedido-numero").textContent = "PEDIDO #---";
            document.getElementById("view-mesa").textContent = "--";
            document.getElementById("view-horario").textContent = "--:--";

            document.getElementById("view-itens").innerHTML =
                '<li class="sem-itens-aviso">Nenhum item em produção...</li>';

            mudarStatus("Aguardando","status-aguardando");

            return;
        }

        const ultimoPedido = pedidos[pedidos.length - 1];

        document.getElementById("view-pedido-numero").textContent =
            "PEDIDO #" + String(ultimoPedido.id).padStart(3,"0");

        document.getElementById("view-mesa").textContent =
            ultimoPedido.mesa || "--";

        document.getElementById("view-horario").textContent =
            ultimoPedido.hora || "--:--";

        const lista = document.getElementById("view-itens");

        lista.innerHTML = "";

        ultimoPedido.itens.forEach(item => {

            const li = document.createElement("li");

            li.textContent = `${item.qtd}x ${item.nome}`;

            lista.appendChild(li);

        });

        mudarStatus("Recebido","status-recebido");

    }

    function mudarStatus(status, classe) {

        const badge = document.getElementById("status-atual");

        badge.textContent = `[ ${status} ]`;

        badge.className = `status-badge ${classe}`;

        const lista = [
            "Recebido",
            "Preparando",
            "Pronto",
            "Entregue"
        ];

        lista.forEach(item => {

            const el = document.getElementById("fluxo-" + item);

            if (!el) return;

            el.classList.remove("fluxo-item-ativo");

            if (item === status)
                el.classList.add("fluxo-item-ativo");

        });

    }

    preencherDadosDoPedido();

    window.addEventListener("storage", function(e){

        if(e.key === "pedidos"){
            preencherDadosDoPedido();
        }

    });

</script>
    
    </>
)

}