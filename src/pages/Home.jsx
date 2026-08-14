
import Header from "../components/Header";
import CardProd from "../components/CardProd";
import Funcionarios from "../components/Funcionario";
import Footer from "../components/Footer";
import Contador from "../components/Contador";

function Home() {
    return (
        <>
            <Header
                titulo="Lanchonete do Senai"
                subtitulo="O melhor da regiao"
            />

            <CardProd />

            <Contador />

            <Funcionarios />

            <Footer />
        </>
    );
}

export default Home;
