import styled from "styled-components";

type BotaoType = {

    botao?: boolean;
}

export const Botao = styled.button<BotaoType>`

    display: flex;
    justify-content: ${(props)=>props.botao === true? 'flex-end' : 'flex-start'};
    align-items: center;
    height: 28px;
    width: 100px;
    border: solid 1px gray;
    border-radius: 28px;
    background-color: ${(props)=>props.botao === true? '#43BC2F' : 'transparent'};
    margin-top: 30px;
    z-index: 9998;
    opacity: ${(props)=>props.botao === true? 1.0 : 0.4};;
    cursor: pointer;    
    transition: 0.5s;

    padding: 0;
   

`;

export const BotaoContainer = styled.div<BotaoType>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props)=>props.botao === true? 'flex-end' : 'flex-start'};
    align-items: center;
    transition: 0.5s;
  
    

`;

export const Circulo = styled.div<BotaoType>`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: ${(props)=>props.botao === true? 'flex-end' : 'flex-start'};
    height: 27px;
    width: 27px;
    border-radius: 100%;
    background-color: red;
    z-index: 9999;
    cursor: pointer;
   
    
    transition: 0.5s;


`;
