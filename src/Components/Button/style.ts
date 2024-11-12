import styled from "styled-components";

type ButtonProps = {

    widthButton?: string;
    marginTop?: string;
}

export const Button = styled.button<ButtonProps>`
    
    padding: 15px 30px;
    border: 0;
    background-color: #43BC2F;
    border-radius: 12px;
    color: white;
    font-family: 'gilroy-bold';
    font-size: 13px;
    cursor: pointer;
    margin-top: ${(props)=>props.marginTop? props.marginTop : ''};
    width: ${(props)=>props.widthButton? props.widthButton : ''};
`;

