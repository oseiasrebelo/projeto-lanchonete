import './Login.css'
function Login({login}){
    return(
        <>
        
        <div className="Loging-container">
            <h4>  </h4>
        <form class="login-box"> 
        <h3>Login</h3>
        <input type="text" id="meuNome" placeholder="Digite seu nome:"/>      
        <input type="text" id="sua idade" placeholder="Digite sua idade:"/>
        <button onclick="salvarDado()">Salvar</button>
        <h5>Esqueceu a senha?</h5>
        </form>
        </div>
        </>
    )
}
export default Login