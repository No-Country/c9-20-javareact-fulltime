import styled from "styled-components";
import { BackgroundImageButtons } from "../../../styled-components";
import { FlexBoxCenter } from "./../../../styled-components/reusable/reusable.styled";

export const ButtonCarStyled = styled.button`
    ${BackgroundImageButtons};

`;

export const ContainerListStyled = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 50px;

`;

export const ContainerFormClaimsStyled = styled.form`

    inline-size: 1200px;
    textarea{

        inline-size: 100%;
        padding: 10px;
        border-radius: 10px;
        resize: none;

    }
`;
/* Card Resposive abieto a que lo configuren */
export const CardContainer = styled.div`
width: 300px;
height: 366px;
background-color: #FFF;
display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 20px;

h1{
    margin: 15px;
    font-size: 1.5rem;
}
`;
export const CardContent = styled.div`
height: 180px;
margin: 10px;
img{
    width: 100%;
    height: 100%;
}
`;
export const CardTitle = styled.div`
    text-align: center;
`;

/* ------------------------------ COMENTS ITEMS ----------------------------- */

export const CommentContainer = styled.section`
    width: 563px;
    height: 142px;
    color: #FFF;
    display: flex;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
`;
export const CommentImg = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 1.5em;
    transform: translateY(-1.5em);
    border-radius: 208px;
`;
export const CommentName = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 10px;
`;
export const Comment = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;
export const CommentDate = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
`;

export const LineStyle = styled.div`
    color: #FFF;
    font-size: 18px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4em;
    text-align: center;
    p {
        flex-shrink: 0;
        text-align: center;
    }

    ::before {
        content: " ";
        display:block;
        border: 1px solid #ccc;
        flex-grow: 1;
    }
    ::after {
        content: " ";
        display:block;
        border: 1px solid #ccc;
        flex-grow: 1;
    }
`;

export const SearchStyle = styled.form`
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  padding-top: 5em;
  
  input {
    color: #ffffff;
    width: 548px;
    height: 50px;
    padding: 0 2em;
    background: transparent;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 129.5%;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
  }
  img {
    position: relative;
    left: -4em;
  }
`;

export const SectionHeroStyled = styled.section`

    block-size: 1092px;
    border-radius: 0px 0px 100px 100px;
    ${BackgroundImageButtons};
    padding-top: 39px;

    h1{
    font-weight: 200;
    font-size: 2rem;
    text-align: center;
    color: var(--text-primary);
  }
`;

export const FormStyled = styled.form`
    position: relative;
    block-size: 50px;
    inline-size: 548px;
    margin-top: 12px;
    margin-left : auto;
    margin-right : auto;

`;
export const ButtonSearchStyled = styled.button`
    
    position: absolute;
    inset-block-start: 26%;
    inset-inline-end: 4%;
    ${BackgroundImageButtons};
    padding:.7em;
`;

export const InputStyled = styled.input`
    padding: 0 1.6em;
    block-size: 100%;
    inline-size: 100%;
    border-radius: 4px;
    font-size: 1.4rem;
    color: var(--text-primary);
    background-color: transparent ;  

    &::placeholder{
        color: white;
    }
`;

export const ParagraphStyled = styled.p`
    padding: 0 18rem;
    font-weight:200;
    line-height: 23px;
    text-align: center; 
`;

export const ItemsCommentsStyled = styled.article`
    position: relative;
    ${FlexBoxCenter};
    max-block-size: 177px;
    inline-size: 620px;
    padding: 21px 0;
    border: 1px solid var(--text-primary);
    border-radius: 4px;
    gap: 12px;

    header{
        position: relative;
        inline-size: 140px;
        block-size: 199px;

        img{
            position: absolute;
            inset-block-start: -3%;
         }
    }


    div{
        inline-size: 70%;
        text-align: left;
        padding:0 12px;
        h3{
            margin: 0;
        }
        
         hr{
            display: inline-block;
            inline-size : 94%;
        }
        p{
            margin:0;
        }
        span{

            display: inline-block;
            padding: 10px 0;
        }
        

    }
`;

export const CarruselStyled = styled.div`
    
    ${FlexBoxCenter};
    gap: 100px;
    block-size: 510px;
    inline-size: 1378px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    div{

        display: flex;
        gap: 110px;
        transform: translateX(${({ translateX }) => translateX});
        transition: transform 1s cubic-bezier(.45,.05,.55,.95); 
    }
`;

export const ContainerButtonStyled = styled.div`
    ${FlexBoxCenter};
    gap: 17px;
    button{

        padding: .4em .9em;
        background-color: var(--button-primary);
    }
`;
