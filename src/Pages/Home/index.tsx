import React from "react";
import Menu from "../../Components/Menu";
import GlobalStyle from "../../GlobalStyle";
import { Titulo, Container } from "../Home/style";
import Cart from "../Cart";
const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Container>
        <Titulo>Produtos em destaque</Titulo>
        <Cart />
      </Container>
    </>
  );
};

export default Home;
