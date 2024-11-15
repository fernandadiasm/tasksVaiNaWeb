import * as S from "./style";

import loja from "../../assets/images/loja.png";

export default function Sobre() {
  return (
    <S.Sobre>
      <img src={loja} alt="" />
      <div className="texto">
        <h2>PREPARAÇÃO</h2>
        <h1>Níveis de torra</h1>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </p>
        <button>SAIBA MAIS</button>
      </div>
    </S.Sobre>
  );
}
