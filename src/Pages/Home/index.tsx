import React, { useEffect, useState } from "react";
import Menu from "../../Components/Menu";
import GlobalStyle from "../../GlobalStyle";
import { Titulo, Container, Products } from "../Home/style";
import Cart from "../Cart";
import ProductItem from "../../Components/ProductItem";
import Button from "../../Components/Button";
import { getProductsAxios } from "../../axios";

const Home = () => {

  const [products, setProducts] = useState<any>([]);

  const getProducts = async()=>{
    const productAPI = await getProductsAxios();
    setProducts(productAPI);
  }

  useEffect(()=>{
    getProducts();

  }, []);

  
    
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Container>
        <Titulo>Produtos em destaque</Titulo>
        <Products>
          {products.length > 0 && products.map((product: any) =>{
            return (<ProductItem product={product} />)
          })}

{/*           // <ProductItem></ProductItem>
          // <ProductItem></ProductItem>
          // <ProductItem></ProductItem>          
          // <ProductItem></ProductItem> */}
       
        </Products>
      </Container>
      <br>
      </br>
      {/* <Cart /> */}
    </>
  );
};

export default Home;
