import React from "react";
import Menu from "../../Components/Menu";
import GlobalStyle from "../../GlobalStyle";
import { Titulo, Container, Products } from "../Home/style";
import Cart from "../Cart";
import ProductItem from "../../Components/ProductItem";
import Button from "../../Components/Button";
const Home = () => {

    
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Container>
        <Titulo>Produtos em destaque</Titulo>
        <Products>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>          
          <ProductItem></ProductItem>
       
        </Products>
      </Container>
      <br>
      </br>
      {/* <Cart /> */}
    </>
  );
};

export default Home;
