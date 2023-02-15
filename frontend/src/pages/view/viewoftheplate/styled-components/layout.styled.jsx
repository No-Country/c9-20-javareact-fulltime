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
    block-size: 307px;
    inline-size: 468px;
    
    header{
      display: inherit;
      align-items: center;
      justify-content: space-between;
      inline-size: 100%;
      h2{
        font-size: 2rem;
        font-weight: 500;
      }
      h2 + div{
        display: inherit;
        align-items: center;
        gap: 12px;
      }
    }


    header +  div strong{
      font-size: 1.5rem;
      font-weight: 500;
    }

    header + div:nth-child(2) {
      min-inline-size: 636px;      
      font-weight: 300;
    }

    header + div p:last-child{
      font-size: 2rem;
      font-weight: 500;
    } 

    footer{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-block-start: .6em;
     button{
       background-color: var(--button-primary);
      }

      span{
        min-inline-size: 19px;
        text-align: center;
      }

      div button{
        padding: 1em ;  
      }


      button:nth-child(3){
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
