import { useState } from "react";
import * as S from "./style";
import laranjaGrande from "../../assets/images/laranjaGrande.png"
import laranjaPequeno from "../../assets/images/laranjaPequeno.png"
import vermelhoGrande from "../../assets/images/vermelhoGrande.png"
import vermelhoPequeno from "../../assets/images/vermelhoPequeno.png"
import amareloGrande from "../../assets/images/amareloGrande.png"
import amareloPequeno from "../../assets/images/amareloPequeno.png"

export default function Home() {

  
  // Estado para armazenar a cor do círculo e a imagem do copo
  const [corCirculo, setCorCirculo] = useState("#037143"); // Cor padrão
  const [imagemCopo, setImagemCopo] = useState(laranjaGrande); // Imagem padrão

  const mudaCopo = (cor, imagem) => {
    setCorCirculo(cor);
    setImagemCopo(imagem);
  };

  return (
    <S.Home $corCirculo={corCirculo}>
      <section>
        <div className="texto">
          <h2>Mais que Café</h2>
          <h1>
            Isso é <span>Starbucks</span>
          </h1>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button>SAIBA MAIS</button>
        </div>
             
      </section>
       {/* Div circulo com cor dinâmica */}
      <div className="circulo" >
            <img className="copo" src={imagemCopo} alt="Copo" />
        </div>  

        {/* Ao clicar nos copinhos muda o copão e a cor do circulo de fundo */}
      <div className="coposPequenos">
            <img className="laranja" src={laranjaPequeno} alt="" onClick={() => mudaCopo("#037143", laranjaGrande)} />
            <img className="vermelho" src={vermelhoPequeno} alt=""  onClick={() => mudaCopo("#97090C", vermelhoGrande)} />
            <img className="amarelo" src={amareloPequeno} alt=""  onClick={() => mudaCopo("#DECD13", amareloGrande)}/>

        </div>
    </S.Home>
  );
}
