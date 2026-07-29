import './Funcionarios.css'
import { useRef } from "react";

function Funcionarios() {
  const carouselRef = useRef(null);

  function mover(direcao) {
    const scrollAmount = 240;

    carouselRef.current.scrollBy({
      left: scrollAmount * direcao,
      behavior: "smooth"
    });
  }

  return (
    <section className="funcionarios">

      <h2>Nossos Funcionários</h2>

      <div className="carousel-wrapper">

        <button className="btn" onClick={() => mover(-1)}>
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>

          <div className="card1">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFi7-uAHc7mYw/profile-displayphoto-shrink_200_200/B4DZStPSCFH0AY-/0/1738073253526?e=2147483647&v=beta&t=zWFBIFpTDOstV26PVjIHR0nMdU1fyffyXECvZ15oDpk" />
            <h3>Cesar Stati</h3>
            <p>Gerente</p>
          </div>

          <div className="card1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtxu1WMOxnSveB2XbBnFhZ2Ns9X1BR2_CnQ&s" />
            <h3>Simone</h3>
            <p>Cozinheira</p>
          </div>

          <div className="card1">
            <img src="https://pbs.twimg.com/profile_images/1368049008082620416/vDJW6gWZ_400x400.jpg" />
            <h3>Anderson Cidade</h3>
            <p>CEO</p>
          </div>

          <div className="card1">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFT9o8IhGlqOw/profile-displayphoto-scale_400_400/B4DZhYJ7k1GQAo-/0/1753825656670?e=2147483647&v=beta&t=_ekxCc05vi_pnPJoieKICs-eXIlGHKW2R20YLujbNXM" />
            <h3>Donathan Ramalho Gonçalves</h3>
            <p>Marketing</p>
          </div>

          <div className="card1">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQG3ICTYRibe-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697123488204?e=2147483647&v=beta&t=0xqfuAD_PNM8w8sYmxx1Kupi8TncHUXO1GRK4_0kvX0" />
            <h3>Alexandre Gaspari</h3>
            <p>Caixa</p>
          </div>

          <div className="card1">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4hh2K9kIgCaeoa_VVDYy-DQ52SWKHqsb-GZ16w5MUf0dfmS-b7efaokdn5rZRJp1GWv1vzniO1d-80dqxSIGyoySHsQdT2OKTe1HXkg8tUVYqPyRh5FEFDAMgfgR0BHlrvl30coJg6Mw/s1600/72115539_2539185332808673_7207462959621079040_o.jpg" />
            <h3>Nosso pessoal de atendimento</h3>
            <p>Empregados</p>
          </div>

        </div>

        <button className="btn" onClick={() => mover(1)}>
          ❯
        </button>

      </div>

    </section>
  );
}

export default Funcionarios;