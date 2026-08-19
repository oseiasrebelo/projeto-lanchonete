import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CardProd from "./components/CardProd";
import Carrinho from "./pages/Carrinho";
import Pedidos from "./pages/Pedidos";
import Login from "./pages/Login";

function App() {

    return (
        <>
            <Routes>

              
                <Route
                    path="/"
                    element={<Login />}
                />

             
                <Route
                    path="/Home"
                    element={<Home />}
                />

              
                <Route
                    path="/CardProd"
                    element={<CardProd />}
                />

            
                <Route
                    path="/Carrinho"
                    element={<Carrinho />}
                />

            
                <Route
                    path="/Pedidos"
                    element={<Pedidos />}
                />

            </Routes>
        </>
    );
}

export default App;
