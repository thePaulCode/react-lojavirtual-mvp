import styled from "styled-components";

type DivFlexDirectionRowProp = {
    gap?: string;
    marginTop?: string;
}

export const DivFlexDirectionColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivFlexDirectionRow = styled.div<DivFlexDirectionRowProp>`
    display: flex;
    flex-direction: row;
    gap: ${(props)=>props.gap? props.gap : "0"};
    margin-top: ${(props)=> props.marginTop? props.marginTop : ''};
`;