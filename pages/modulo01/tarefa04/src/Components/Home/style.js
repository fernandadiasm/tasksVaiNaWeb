import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    display: flex;
    justify-content: space-between;
    padding: 60px 25px 0 100px;

    .texto {
      width: 60vw;
      margin-right: 300px;

      h2 {
        font-size: 3rem;
        font-weight: 400;
        font-family: "Inter", sans-serif;
        color: #000000cc;
        height: 60px;
      }
      h1 {
        font-size: 3rem;
        font-weight: 400;
        height: 120px;
        span {
          font-size: 4rem;
          font-weight: 700;
          color: #037143;
        }
      }

      p {
        font-size: 1.5rem;
      }

      button {
        background-color: #037143;
        color: white;
        border-style: none;
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 35px;
        padding: 20px 80px;
        margin: 20px 0;
        cursor: pointer;
        transition: 0.4s ease;

        &:hover {
          background-color: #025130;
        }
      }
    }
  }

.circulo {
  background-color: ${(props) => props.$corCirculo};
  border-radius: 50%;
  width: 600px;
  height: 600px;
  position: fixed;
  bottom: -300px;
  right: -250px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;

}

.copo {
  position: relative;
  height: 350px;
    top: -250px;
    right: 90px;
  transition: 0.8s ease;
  &:hover {
    transform: scale(1) translateY(-10px);
  }
}

  .coposPequenos {
    margin-top: 10vh;

    .laranja,
    .vermelho,
    .amarelo {
      margin: 0 10px;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        transform: translateY(-8px) rotate(10deg);
      }
    }
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column;
      align-items: center;
      padding: 20px;

      .texto {
        margin: 0 0 50px;
        text-align: center;
        background-color: white;

        h2 {
          font-size: 2rem;
        }

        h1 {
          font-size: 2.5rem;
          span {
            font-size: 3rem;
          }
        }

      p {
        font-size: 1rem;
      }

        button {
          padding: 10px 40px;
        }
      }
    }

    .circulo {
      margin: 300px 0 300px;
      border-radius: 50%;
      width: 846px;
      height: 626px;
      position: fixed;
      top: 130px;
     
      right: -540px;
      z-index: -1;
    }

    .copo {
      height: 350px;
      position: relative;
      top: -220px;
      right: 255px;
      transition: 0.8s ease;
      z-index: 0;

      &:hover {
      transform: none;
    }
      
    }

    .coposPequenos {
    margin-top: 0vh;
    display: flex;
    flex-direction: column;

    .laranja,
    .vermelho,
    .amarelo {
      height: 100px;
      margin: 10px;
      cursor: pointer;
      transition: 0.3s ease;
      position: relative;
      bottom: 20px;
      right: 110px;
      z-index: 1;
      &:hover {
        transform: translateY(-8px) rotate(10deg);
      }
    }
  }
  }

`;
