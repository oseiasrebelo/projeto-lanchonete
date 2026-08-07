import Header from "../components/Header";
import Login from "../pages/Login";
import CardProd from "../components/CardProd";
import Funcionarios from "../components/Funcionario";
import Footer from "../components/Footer";
import Contador from "../components/Contador";

function Home (){

return {
    <>
     <Header titulo="Lanchonete do Senai"
              subtitulo="O melhor da regiao"/>
      <Login/>
      <CardProd/>
      <Contador/>
      <Funcionarios/>
      <Footer/>
    </>
}    
}

export default Home