import styled from "styled-components";

type ProductPriceProps = {

    fake?: boolean;
}

export const Card = styled.div`

    border: solid 0px red;
    display: flex;    
    flex-direction: column;
    justify-content: flex-end;
    height: 500px;
    width: 250px;
    border-radius: 25px;
    background-color: gray;
    padding-bottom: 20px;


`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ProductName = styled.div`
    font-family: 'gilroy-regular';
    font-size: 20px;
    color: #43BC2F;
    margin-top: 10px;;


`;

export const ContainerProductPrice = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;

`;

export const ProductPrice = styled.div<ProductPriceProps>`

    text-decoration: ${(props)=>props.fake === true? 'line-through' : ''};
    font-family: 'gilroy-regular';
    color: #43BC2F;

`;

export const ContainerInfosProduct = styled.div`
    display: flex;
    flex-direction: column;
`;