import React from "react";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/Variable/Temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/Variable";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : temaClaro;
  }

  const toggleTema = () => {
    setTheme((theme) => !theme)
  }

  return (
    <ThemeProvider theme={ theme ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema theme ={ theme }/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
