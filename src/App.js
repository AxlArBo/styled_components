import React from "react";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/Variable/Temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/Variable";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro,temaOscuro)

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={ tema }/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
