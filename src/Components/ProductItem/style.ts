import styled from "styled-components";

type ProductPriceProps = {

    fake?: boolean;
}

type CardImageProps = {
    backGroundImage?: string;
}

export const Card = styled.div<CardImageProps>`

    border: solid 0px red;
    background-image: url(${(props)=>props.backGroundImage});
    display: flex;    
    flex-direction: column;
    justify-content: flex-end;
    height: 450px;
    width: 250px;
    border-radius: 25px;
    background-color: gray;
    padding-bottom: 20px;
    text-decoration: none;


`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ProductName = styled.div`
    font-family: 'gilroy-regular';
    font-size: 20px;
    /* color: #43BC2F; */
    color: black;
    margin-top: 10px;;
    text-decoration: none;

`;

export const ContainerProductPrice = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;

`;

export const ProductPrice = styled.div<ProductPriceProps>`

    text-decoration: ${(props)=>props.fake === true? 'line-through' : ''};
    font-family: 'gilroy-regular';
    color: black;

`;

export const ContainerInfosProduct = styled.div`
    display: flex;
    flex-direction: column;
`;