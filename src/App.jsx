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

                {/* LOGIN */}
                <Route
                    path="/"
                    element={<Login />}
                />

                {/* HOME */}
                <Route
                    path="/Home"
                    element={<Home />}
                />

                {/* CLIENTE */}
                <Route
                    path="/CardProd"
                    element={<CardProd />}
                />

                {/* CARRINHO */}
                <Route
                    path="/Carrinho"
                    element={<Carrinho />}
                />

                {/* ADMIN */}
                <Route
                    path="/Pedidos"
                    element={<Pedidos />}
                />

            </Routes>
        </>
    );
}

export default App;
