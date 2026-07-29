import Header from "./components/Header";
import Login from "./components/Login";
import CardProd from "./components/CardProd";
import Funcionarios from "./components/Funcionario";
import Footer from "./components/Footer";
import Contador from "./components/Contador";

function App(){
  return(
    <>
      <Header titulo="Lanchonete do Senai"
              subtitulo="O melhor da regiao"/>
      <Login/>
      <CardProd/>
      <Contador/>
      <Funcionarios/>
      <Footer/>
      
      </>
  )
}
export default App