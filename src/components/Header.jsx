import './Header.css';
import { Link } from "react-router-dom";

function Header({ titulo, subtitulo }) {
    return (
        <>
            <header>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <p>Carrinho</p>
            </header>

            <nav className="menu">
                <Link to="/Home">Home</Link>
                <Link to="/Carrinho">Carrinho</Link>
                <Link to="/Pedidos">Pedidos</Link>
                <Link to="/">Login</Link>
            </nav>
        </>
    );
}

export default Header;
