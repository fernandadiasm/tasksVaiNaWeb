import { Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";
import logo from "../../assets/images/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de menu


  

export default function Header() {

  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <S.Header>
      <img src={logo} alt="logo do starbucks" />

      <S.MenuIcon onClick={alternarMenu}>
        {menuAberto ? <FaTimes /> : <FaBars />}
      </S.MenuIcon>

      <S.Nav $menuAberto={menuAberto}>
        <ul>
          <li>
            <Link to="/" onClick={alternarMenu}>Home</Link>
          </li>
          <li>
            <Link to="/Novidades" onClick={alternarMenu}>Novidades</Link>
          </li>
          <li>
            <Link to="/Sobre" onClick={alternarMenu}>Sobre</Link>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
