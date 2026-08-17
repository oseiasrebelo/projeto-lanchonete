import Header from "../components/Header";
import "./Pedidos.css";

function Pedidos (){
    return (
    <>
  <Header />

  <h1>Painel de Controle da Cozinha</h1>


<div className="pedido-card">


<div className="pedido-header">

<h2 id="view-pedido-numero" className="pedido-numero">
PEDIDO #---
</h2>


<div className="pedido-meta">

<p>
<strong>Mesa:</strong>
<span id="view-mesa">--</span>
</p>


<p>
<strong>Horário:</strong>
<span id="view-horario">--:--</span>
</p>

</div>

</div>



<ul id="view-itens" className="itens-lista">

<li className="sem-itens-aviso">
Nenhum item em produção...
</li>

</ul>




<div className="pedido-footer">

senaipr.org.br<br />

Rua Senador Accioly Filho, 298 | Cidade Industrial de Curitiba<br />

81310-000 | Curitiba - PR | (41) 3271-7100

</div>




<div className="status-container">

<div className="status-titulo">
Status
</div>


<span id="status-atual"
className="status-badge status-aguardando">

[ Aguardando ]

</span>


</div>


</div>





<div className="controle-paineis">


<h3>
Alterar Status do Pedido
</h3>


<div className="botoes-status">


<button className="btn-status btn-rec">
Recebido
</button>


<button className="btn-status btn-prep">
Preparando
</button>


<button className="btn-status btn-pronto">
Pronto
</button>


<button className="btn-status btn-ent">
Entregue
</button>


</div>


</div>





<div className="fluxograma">

<p>STATUS</p>

<span id="fluxo-Recebido">
Recebido
</span>

<br />│<br />▼<br />


<span id="fluxo-Preparando">
Preparando
</span>


<br />│<br />▼<br />


<span id="fluxo-Pronto">
Pronto
</span>


<br />│<br />▼<br />


<span id="fluxo-Entregue">
Entregue
</span>


</div>
    
    </>
)

}

export default Pedidos