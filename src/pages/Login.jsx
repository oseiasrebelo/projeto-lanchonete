import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    function entrar(event) {
        event.preventDefault();

        if (usuario === 'cliente' && senha === '123') {
            navigate('/CardProd');
        } 
        else if (usuario === 'admin' && senha === '123') {
            navigate('/Pedidos');
        } 
        else {
            setMensagem('Usuário não cadastrado!');
        }
    }

    return (
        <div className="Loging-container">
            <h4></h4>

            <form className="login-box" onSubmit={entrar}>
                <h3>Login</h3>

                <input
                    type="text"
                    id="meuNome"
                    placeholder="Digite seu usuário:"
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />

                <input
                    type="password"
                    id="suaSenha"
                    placeholder="Digite sua senha:"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />

                <button type="submit">Entrar</button>

                {mensagem && (
                    <p className="mensagem-erro">
                        {mensagem}
                    </p>
                )}

                <h5>Esqueceu a senha?</h5>
            </form>
        </div>
    );
}

export default Login;
