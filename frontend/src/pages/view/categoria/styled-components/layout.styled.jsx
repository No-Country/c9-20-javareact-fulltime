import styled from "styled-components";
import { FlexBoxCenter } from "../../../../styled-components";
export const ItemFoodStyled = styled.article`
    ${FlexBoxCenter}
    gap: 30px;
    block-size: 197px;
    inline-size: 595px;
    text-align: left;
    box-shadow :  0px 4px 4px rgba(0, 0, 0, 0.25);
    transform : scale(100%);
    transition: transform  1s  ease-in; 
    a{
        display: flex;
    }
    
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

export const CategoryStyled = styled.section`
    inline-size: 100%;
`;
