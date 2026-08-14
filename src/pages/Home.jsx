
import Header from "../components/Header";
import CardProd from "../components/CardProd";
import Funcionario from "../components/Funcionario";
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

            <Funcionario />

            <Footer />
        </>
    );
}

export default Home;
