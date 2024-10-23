import styled from "styled-components";

type SideProps = {
    side?: string;
}
export const MenuContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 2px green;
    height: 60px;
`;  

export const MenuSide = styled.div<SideProps>`
    border: solid 2px blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props)=>props.side === "right"? 'flex-end': 'flex-start'};
    flex: 1;
    gap: 20px;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;


`;

export const MenuItem = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-family: 'gilroy-bold';
    color: #43BC2F;
`;