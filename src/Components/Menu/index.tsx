import React from "react";
import { MenuContainer, MenuSide, MenuItem } from "./style";

function Menu(){
  return (
    <>
      <MenuContainer>
        <MenuSide side="left">
            <div>LOGO-AQUI</div>
        </MenuSide>
        
        <MenuSide side="right">
            <MenuItem>
                Login
                
            </MenuItem>
            <MenuItem>
            Meus Pedidos
            </MenuItem>
            <MenuItem>
                Carrinho
            </MenuItem>
            
            
        </MenuSide>
      </MenuContainer>
    </>
  );
}

export default Menu;
