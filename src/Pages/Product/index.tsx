import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalStyle from "../../GlobalStyle";
import Menu from "../../Components/Menu";
import ProductItem from "../../Components/ProductItem";
import {
  ContainerProduct,
  DivProductInfos,
  DivProductPhotos,
  CardProduct,
  ProductNameCart,
  ProductPriceCart,
  ProductDescription,
  ProductSizeOption,
  ProductSelectQuantity,
  Error
} from "./style";
import { getProduct } from "../../axios";
import { ProductName } from "../../Components/ProductItem/style";
import { DivFlexDirectionColumn, DivFlexDirectionRow } from "../../uikit";
import Button from "../../Components/Button";

function Product() {
  const { id }: any = useParams();

  const [product, setProduct] = useState<any>(null);
  const [produtctPrincipalSize, setProductPrincipalSize] = useState<any>(null);
  const [sizeChoice, setSizeChoice] = useState<any>({});
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState('');

  function checkSize(productItem: any){
    setError('');

    if(productItem.quantidade_estoque > 0){
      setSizeChoice(productItem);
    }
  }

  const addProductCart = async ()=> {
    setError('');
    if(!sizeChoice.nome ){
      setError("Por favor, escolha um tamanho com estoque!");
      return;
    }

    if(quantity === 0){

      setError("Por favor, escolha a quantidade do produto.")
    }

    //TODO try catch
  }


  const getProductAPI = async (id: string) => {
    const resultProducts = await getProduct(id);

    setProduct(resultProducts);
    setProductPrincipalSize(
      resultProducts?.tamanhos.find((item) => item.principal)
    );
  };

  useEffect(() => {
    getProductAPI(id);
  }, []);

  console.log(sizeChoice.nome); //1:47
  console.log(quantity);

  return (
    <>
      {product && (
        <>
          <GlobalStyle />
          <Menu />
          <ContainerProduct>
            <DivProductPhotos>
              <CardProduct backgroundImage={product.fotos[0]}></CardProduct>
            </DivProductPhotos>
            <DivProductInfos>
              <ProductNameCart>{product.nome}</ProductNameCart>
              <DivFlexDirectionColumn>
                <DivFlexDirectionRow marginTop={"10px"} gap={"5px"}>
                  {produtctPrincipalSize && (
                    <>
                      <ProductPriceCart textDecoration>
                        {produtctPrincipalSize.preco_de.toLocaleString(
                          "pt-BR",
                          { style: "currency", currency: "BRL" }
                        )}
                      </ProductPriceCart>

                      <ProductPriceCart>
                        {produtctPrincipalSize.preco_por.toLocaleString(
                          "pt-br",
                          { style: "currency", currency: "BRL" }
                        )}
                      </ProductPriceCart>
                    </>
                  )}
                </DivFlexDirectionRow>
                <ProductDescription>{product.descricao}</ProductDescription>
                <DivFlexDirectionRow gap={"20px"}>
                  {product.tamanhos.map((productItem: any) => {
                    return (
                      <ProductSizeOption
                        disable={productItem.quantidade_estoque > 1 ? false : true}
                        
                        onClick={()=>checkSize(productItem)}
                        check={productItem === sizeChoice? true : false}
                      >
                        {productItem.nome}
                      </ProductSizeOption>
                    );
                  })}
                </DivFlexDirectionRow>
                <DivFlexDirectionRow marginTop="20px">
                  <ProductSelectQuantity 
                    value={quantity} 
                    onChange={(e: any)=>setQuantity(e.target.value)}
                    placeholder="1" 
                    type='number' 
                    min={1} 
                    max={sizeChoice.quantidade_estoque}>

                    </ProductSelectQuantity>

                   
                    
                </DivFlexDirectionRow>
                {error && 
                       (
                        <><Error>{error}</Error></>
                      )
                    }
                <Button 
                  widthButton="242px" 
                  marginTop="40px"
                  onClick={()=>addProductCart()}
                >
                  Adicionar ao carrinho
                </Button>
                
              </DivFlexDirectionColumn>
            </DivProductInfos>
          </ContainerProduct>
        </>
      )}

      {!product && <>Carregando produto...</>}
    </>
  );
}

export default Product;
