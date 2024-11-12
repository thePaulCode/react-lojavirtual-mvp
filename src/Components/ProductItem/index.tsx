import React from "react";
import { Link } from "react-router-dom";
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
    <Link to={`/product/${product.id}`}>      
      <ContainerInfosProduct>
      <Card backGroundImage={product.fotos[0]}>
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
    </Link>
  );
}

export default ProductItem;
