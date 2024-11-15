import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5vw;
  font-family: "Poppins", sans-serif;

  font-size: 1.5rem;

  
`;

export const Nav = styled.nav`
 
    margin: 0 5vw;
    ul {
      list-style: none;
      display: flex;
      li {
        margin: 0 2vw;
      }

      a {
        text-decoration: none;
        color: #1e3932;

        &:hover {
          color: #037143;
        }
      }
    }
  

  @media (max-width: 768px) {
    /* Quando o menu não estiver aberto, ele fica escondido */
    display: ${({ $menuAberto }) => ($menuAberto ? "block" : "none")};
    position: absolute;
    right: 9vw;     
    border-radius: 8px;
    width: 50vw;
    padding: 1rem 0;
    
    

    ul {
      flex-direction: column;
      align-items: center;
      padding: 0;

      li{
        margin-top: 1vw;
        text-decoration: underline #037143;
      }
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: #1e3932;
  
  @media (max-width: 768px) {
    display: block;
    
  }
`;