import {Routes , Route } from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Pedidos from "./pages/Pedidos";
import Login from "./pages/Login";

function App(){

  return(
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/carrinho" element={<Carrinho/>}/>
      <Route path="/pedido" element={<Pedidos/>}/>
    </Routes>
      </>
  )
}
export default App