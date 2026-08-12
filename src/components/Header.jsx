import './Header.css'
import { Link} from "react-router-dom";

function Header({titulo,subtitulo}){
    return (

<>
        <Header>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p> Carrinho ({quantidade})</p>
        </Header>
        <nav className='menu'>
            <Link to ="/home">Home</Link>
            <Link to ="/carrinho">Carrinho</Link>
            <Link to ="/pedido">Pedidos</Link>
            <Link to ="/">Login</Link>
        </nav>

</>
        
    )
}
export default Header 
//export sem precia estar no final para poder ser exportado