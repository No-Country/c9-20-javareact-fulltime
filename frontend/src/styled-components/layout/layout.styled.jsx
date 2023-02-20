import styled from "styled-components";
import {
	BackgroundImageButtons,
	FlexBoxCenter,
} from "../reusable/reusable.styled";

export const HeaderSubtitleStyled = styled.header`
    text-align: ${({ textAlign }) => textAlign}; 
`;

//TODO Div responsive abierto a modificar */
export const Div = styled.div`
    display: flex;
    margin:15px;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: ${({ gap }) => gap || "0px"};
`;
export const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    margin:15px;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const ModalStyled = styled.div`
    position: fixed;
    inset: 0;
    ${FlexBoxCenter};
    background-color: rgba(85, 84, 84, 0.73); 
    z-index: 2;
    visibility: ${({ visibility }) => visibility};

    & > div{
        position: relative;
        ${FlexBoxCenter};
        flex-direction: column;
        block-size: 843px;
        inline-size: 932px;
        background-color: rgba(255, 252, 252, 1);
                
    }

`;

export const HeroImageStyled = styled.div`
    
    block-size: ${({ blockSize }) => blockSize};
    inline-size: ${({ inlineSize }) => inlineSize};
    text-align: center;
    background-color: rgba(218, 220, 224, 1);


`;

export const ButtonModalStyled = styled.button`

    position: absolute;
    inset-block-start: 17%;
    inset-inline-end: 9%;
    padding: ${({ padding }) => padding} ; 
    ${BackgroundImageButtons};
    
`;

