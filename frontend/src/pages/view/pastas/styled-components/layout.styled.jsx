import styled, { css } from "styled-components";

const FlexBoxCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PastasStyled = styled.section`
    min-block-size: 100vh;
    padding: 22px;
    text-align: center;

    span{
        display: inline-block;
        margin-block-start: 40px;
    }
`;

export const HeroImageStyled = styled.div`
    
    block-size: ${({ blockSize }) => blockSize};
    inline-size: ${({ inlineSize }) => inlineSize};
    text-align: center;
    background-color: rgba(218, 220, 224, 1);


`;

export const ContainerDetailsStyled = styled.div`

    ${FlexBoxCenter}
    gap: 23px;
    min-block-size: 160px;
`;

export const ItemFoodStyled = styled.article`
    ${FlexBoxCenter}
    gap: 30px;
    block-size: 197px;
    inline-size: 595px;
    text-align: left;
    box-shadow :  0px 4px 4px rgba(0, 0, 0, 0.25);
    transform : scale(100%);
    transition: transform  1s  ease-in; 

    &:hover{
        transform : scale(102%);
    }

    & > div {
        flex: 1;
       & ~  div{    
             display: grid;
             justify-content: flex-start;
             flex: 2;
             block-size: 100%;
        }
    }

`;
