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

interface ProductItemProps {
  product?: any;
}

function ProductItem({product}: any) {
  const principalSize = product.tamanhos.find((tamanho: any)=>tamanho.principal);
  return (
    <>      
      <ContainerInfosProduct>
      <Card>
        <ContainerButton>
          <Button>Adicionar ao carrinho</Button>
        </ContainerButton>
      </Card>
        <ProductName>{product.nome} </ProductName>
        <ContainerProductPrice>
          <ProductPrice fake={true}>{principalSize? principalSize.preco_de.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : ''}</ProductPrice>

          <ProductPrice>{principalSize? principalSize.preco_por.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : ''}</ProductPrice>
        </ContainerProductPrice>
      </ContainerInfosProduct>
    </>
  );
}

export default ProductItem;
