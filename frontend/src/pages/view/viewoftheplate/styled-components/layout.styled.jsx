import styled from "styled-components";
import { FlexBoxCenter } from "../../../../styled-components";

export const ViewOfThePlateStyled = styled.section`
    ${FlexBoxCenter};
    flex-direction: column;
    min-block-size: 100vh;  
    inline-size: 100%;
    color: var(--text-primary);
    background-color: var(--background-primary); 
    z-index: 2;
    overflow: hidden;
    hr{
        inline-size: 88%;
        margin-top: 60px;
    }
`;

export const ContainerStyled = styled.div`
    display: flex;
    align-items: ${({ alignItems }) => alignItems || "center"};
    justify-content: space-evenly;
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    inline-size: 100%;
    min-block-size: 570px;
    padding: ${({ padding }) => padding || "0px"};
`;

export const ArticleStyled = styled.article`

    display: flex;
    flex-direction: column;
   min-block-size: 307px;
    inline-size: 468px;

`;

export const HeaderArticleStyled = styled.header`
      
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 100%;
    font-size:  1.5rem;
      h2{
        font-weight: 500;
      }
       div{
        display: inherit;
        align-items: center;
        gap: 12px;
        p{
          font-size: 1.2rem;
        }
      }

`;

export const DescriptionStyled = styled.div`
   strong{
      font-size: 1.5rem;
      font-weight: 500;
    }

    p:nth-child(2) {
      min-inline-size: 636px;      
      font-weight: 300;
      padding-right: 1em;
    }

    p:nth-child(4) {
      font-size: 2rem;
      font-weight: 500;
    } 
`;

export const FooterArticleStyled = styled.footer`

    display: flex;
    justify-content: space-around;
    align-items: center;
    inline-size: 500px;
    margin-block-start: .6em;

    span{
      min-inline-size: 19px;
      text-align: center;
    }
    button{
      background-color: var(--button-primary);
     }

    div{
      display: flex;
      button{
   
        padding: 1em ;
      }
    }

      button{
        display: flex;
        align-items: center;
        gap: 17px;
        padding: 1em 5em;
        border-radius: 4px;
        span{ 
          font-weight: bold;
          font-size: 1rem;
        }
      }

    
`;

export const StarIconStyled = styled.svg`

    --size: 25px;
      block-size: var(--size);
      inline-size: var(--size);
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    label{
        font-size: 1.3rem;

    }
    input{
        margin-top: 18px;
        padding: 1em;
        border-radius: 5px;
        color: var(--text-primary);

        background-color: transparent ; 
    }
    
`;

export const ContainerStartStyled = styled.header`
    display: flex;
    align-items: center;
    gap: 80px;
    div{
        display: flex;
    }
`;
