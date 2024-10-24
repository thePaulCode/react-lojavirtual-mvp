import React from "react";
import {
  Card,
  ContainerButton,
  ContainerProductPrice,
  ProductName,
  ProductPrice,
  ContainerInfosProduct
} from "./style";
import Button from "../Button";

function ProductItem() {
  return (
    <>
      
      <ContainerInfosProduct>
      <Card>
        <ContainerButton>
          <Button>Adicionar ao carrinho</Button>
        </ContainerButton>
      </Card>
        <ProductName>Camiseta RW</ProductName>
        <ContainerProductPrice>
          <ProductPrice fake={true}>R$ 69,90</ProductPrice>

          <ProductPrice>R$ 49,90</ProductPrice>
        </ContainerProductPrice>
      </ContainerInfosProduct>
    </>
  );
}

export default ProductItem;
