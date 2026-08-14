import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function salvarDado(event) {
        event.preventDefault();
        navigate('/Home');
    }

    return (
        <div className="Loging-container">
            <h4></h4>

            <form className="login-box" onSubmit={salvarDado}>
                <h3>Login</h3>

                <input
                    type="text"
                    id="meuNome"
                    placeholder="Digite seu nome:"
                />

                <input
                    type="text"
                    id="suaIdade"
                    placeholder="Digite sua idade:"
                />

                <button type="submit">Salvar</button>

                <h5>Esqueceu a senha?</h5>
            </form>
        </div>
    );
}

export default Login;

