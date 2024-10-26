import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
   // align-items: center;
    border: solid 0px blue;
    background-color: #FAFAFA;
    padding-left: 80px;
    padding-right: 80px;
    height: 100vh;

`;

export const Titulo = styled.div`

    font-family: 'gilroy-bold';
    font-size: 20px;
    color: black;
    margin-top: 40px;
`;

export const Products = styled.div`

    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 15px;
`;