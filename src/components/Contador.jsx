import './Contador.css'
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return(
    <div className="contador">
      <h2>X-Burguer</h2>
      <p>Quantidade: {contador}</p>
      <button class="btn"onClick={() => setContador(contador + 1)}>+</button>
      <button class="btn"onClick={() => {if (contador > 0) setContador(contador - 1)}}>-</button>
    </div>
  )
}

  export default Contador;