import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Sobre from "./Components/Sobre/Sobre";
import Home from "./Components/Home/Home";
import Novidades from "./Components/Novidades/Novidades"
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    
  }
  `;

export default function App() {
  return(

    <>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Novidades" element={<Novidades/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}