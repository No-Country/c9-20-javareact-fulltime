import styled from "styled-components";
import {
	BackgroundImageButtons,
	FlexBoxCenter,
} from "../../../../styled-components";
/* export const ItemFoodStyled = styled.article`
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
 */
export const CategoryStyled = styled.section`
    inline-size: 100%;
`;

export const CardStyled = styled.article`
    position: relative;
    --size: 300px;
    block-size: var(--size);
    inline-size: var(--size);
    a{
        position: absolute;
        inset-block-end: 0;
        inset-inline: 0;
        block-size: 100%;
        border-radius: 20px ;
        text-align: center;
        color:var(--background-primary);
        ${BackgroundImageButtons};
        h2{
            position: absolute;
            inset-block-end: 2%;
            inset-inline: 12%;
        }        
    }
`;

export const ItemsCategoryStyled = styled.section`

  ${BackgroundImageButtons};
 
  
`;

export const ItemFoodStyled = styled.article`
    ${FlexBoxCenter};
    flex-direction: column;
    min-block-size: 457px;
    inline-size: 365px;
    padding: 20px 0;
    border-radius: 20px;
    text-align: center;
    color: var(--background-primary);
    background-color: var(--text-primary);

    header{
        position: relative;
        min-block-size: 137px;
        inline-size: 100%;
        img{
            position: absolute;
            inset-block-start: -80%;
            inset-inline: 16%;
        }
    }

    h2{
        font-weight: 500;
    }
    
    b{
        font-size: 12px;

    }

    p{  
        font-size: 12px;
        text-align: center;
        & + strong {
            margin-bottom: 12px;
            font-size: 24px;
        }
    }
    

    a{  
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: .8em 2em;
        border-radius: 4px;
        background-color: var(--button-primary);
        transition: background-color 1s ease-out;
        &:hover{
            background-color: var(--button-secondary);
        }
    }

`;
