import React, { useState } from "react";
import {Botao, BotaoContainer, Circulo} from './style';

function Cart(){

    const [botao, setBotao] = useState(false);

    function handleClick(){
        
        setBotao(!botao);
    }

    
    return (
        <>
            <BotaoContainer>
            <Botao  botao={botao} onClick={handleClick} > 
                <Circulo />
                
             
            </Botao>
           
            

            </BotaoContainer>
            
        </>
    );
}

export default Cart;