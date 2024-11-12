import styled from "styled-components";

type CardProductProps = {
    backgroundImage: string;
}

type ProductPriceCartProps = {
    textDecoration?: boolean;
}

type ProductSizeOptionProps = {

    disable?: boolean;
    check?: boolean;
}

export const ContainerProduct = styled.div`

    border: solid 2px red;
    display: flex;
    flex-direction: row;
    height: 450px;
    width: auto;
    padding: 30px 80px;

`;

export const DivProductPhotos = styled.div`

    display: flex;
    flex: 1;
`;

export const DivProductInfos = styled.div`
    border: solid 1px green;
    display: flex;
    flex-direction: column;
    padding-left: 40px;


    flex: 4;
`;

export const ProductNameCart = styled.div`

    font-family: 'gilroy-bold';
    color: black;
    font-size: 25px;
`;


export const ProductPriceCart = styled.div<ProductPriceCartProps>`

    font-family: 'gilroy-regular';
    font-size: 20px;
    color: black;
    text-decoration: ${(props)=>props.textDecoration? 'line-through' : 'normal'};
    
`;

export const CardProduct = styled.div<CardProductProps>`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 250px;
    background-color: blue;
    background-image: url(${(props)=>props.backgroundImage });
    border-radius: 20px;
    color: yellow;
    font-size: 100px;
`;

export const ProductDescription = styled.div`

    font-family: 'gilroy-bold';
    font-size: 18px;
    margin-top: 20px;
    color: black;
`;

export const ProductSizeOption = styled.div<ProductSizeOptionProps>`

    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=>props.disable? 'darkgray' : props.check? 'blue' : 'white'};
    border-radius: 8px;
    color: ${(props)=>props.disable? 'white' : props.check? 'white' : 'black'};
    border: solid 1px black;
    cursor: ${(props)=>props.disable? 'not-allowed' : 'pointer'};
    margin-top: 20px;
    font-family: 'gilroy-bold';
    text-decoration: ${(props)=>props.disable? '' : ''};

`;

export const ProductSelectQuantity = styled.input`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    border: solid 1px black;
    border-radius: 10px;
    font-family: 'gilroy-regular';
    width: 60px;
`;

export const Error = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
    width: 100%;
    max-width: 222px;
    height: 60px;
    background-color: #f3e105;
    color: #ff0703b5;
    font-family: 'gilroy-bold';
    border-radius: 8px;
    margin-top: 20px;
    padding: 0 10px;
`;