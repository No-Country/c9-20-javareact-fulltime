import styled from "styled-components";
import {
	BackgroundImageButtons,
	FlexBoxCenter,
} from "../reusable/reusable.styled";

export const HeaderStyled = styled.header`
    position:sticky;
    inset-block-start:0;
    inset-inline:0 ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 35%;
    block-size: 106px;
    inline-size: 100%;
    background-color: var(--background-primary);
    z-index: 1;
    a{
         display: inline-block;
    }
`;

export const HeaderSubtitleStyled = styled.header`
    padding: 1em;
    font-size:${({ fontSize }) => fontSize || "1rem"};
    font-weight:${({ fontWeight }) => fontWeight || "bold"};
    color: #FFF;
    text-align: ${({ textAlign }) => textAlign}; 

`;

//TODO Div responsive abierto a modificar */
export const Div = styled.div`
    ${FlexBoxCenter};
    flex-wrap: wrap;
    gap: ${({ gap }) => gap || "0px"};
    block-size: ${({ blockSize }) => blockSize};
    inline-size: ${({ inlineSize }) => inlineSize};
    margin: ${({ margin }) => margin || "0px"};
`;
//TODO Div responsive abierto a modificar */
export const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    margin:15px;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const ModalStyled = styled.section`

    ${FlexBoxCenter};
    flex-direction: column;
    min-block-size: 100vh;  
    inline-size: 100%;
    color: var(--text-primary);
    background-color: var(--background-primary); 
    z-index: 2;
    hr{
      inline-size: 97%;
    }
`;

export const HeroImageStyled = styled.div`
  
    block-size: ${({ blockSize }) => blockSize};
    inline-size: ${({ inlineSize }) => inlineSize};
    text-align: center;
    background-color: rgba(218, 220, 224, 1);


`;

export const Wrapperremember = styled.div`
width:100%;
display: flex;
justify-content:space-between;
align-items:center;
`;

export const Wrappersignup = styled.div`
width:100%;
display: flex;
padding-left: 3em;
align-items:center;

`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 30%;
  min-width: 300px;
  margin: auto;
  padding: 1em;
  
`;

export const Label = styled.label`
  /* margin: 10px; */
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 0;
  &:ms-reveal {
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 0 0 3px currentColor;
  }
`;

export const PasswordInput = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const PasswordContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  position: relative;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 0;
 `;

export const Button = styled.button`
  background-color: #49454F;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-top: 40px;
 `;

export const ShowPasswordIcon = styled.button`
  &:focus {
    outline: none;
    background: none;
  }
  background: none;
  border: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

// TODO REUTILIZABEL FORM REGISTER ANDA LOGIN //
export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  
`;

export const CarListStyled = styled.aside`

   position : fixed;
   inset-inline-end: 0;
   inset-block: 0;
   inline-size: 423px;
   padding-top: 3em;
   padding-left:1em;
   padding-right:1em;
   background-color: var(--background-secondary);
   transform: ${({ translateX }) => translateX};
   transition: transform 1s ease-in-out; 
   z-index:3;

   header{
    display: flex;
    align-items: center;
    inline-size: 70%;
    gap: 12px;
    color: var(--button-primary);
   }
  
   section{
     block-size: 245px;
     overflow-y: scroll;
      ${({ length }) => {
				if (length === 0) {
					return `
          ${FlexBoxCenter};
             color: var(--text-primary);
         `;
				}
			}}
      
   }
   section + hr{
    inline-size: 100%;
   }
   footer{
    margin-top: 17px;
   }

   footer div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    inline-size: 100%;
    margin-top: 17px;
    color: var(--text-primary);
    b{
      font-weight: 400;
    }
   }
  
   footer div:nth-child(2){
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      a{
        color: var(--background-primary);
      }
      a:nth-child(1){
        padding: .7em 2.7em;
        border-radius: 4px;
        background-color: var(--button-primary);
        transition: background-color 1s ease-in-out; 
        &:hover{
          background-color: var(--button-secondary);
        }
      }
      a:nth-child(2){
        color: var(--text-primary);
        text-decoration:  underline ;
      }
   }

`;

export const ItemCartStyled = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
    color: var(--text-primary);
    p{
      display: flex;
      gap: 10px;
    }
    div{
      display: inherit;
      align-items: inherit;
      gap: 12px;
    }

  `;

export const ButtonDeleteItemCartStyled = styled.button`
    padding: 1em;
    ${BackgroundImageButtons};
    background-position: center; 

`;

export const ButtonCarListExitStyled = styled.button`
  position: absolute;
  inset-block-start: 4%;
  inset-inline-end: 5%;
 ${BackgroundImageButtons};
  padding: .6em;
`;

export const ContainerModelStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    inline-size: 100%;
    min-block-size: 570px;

`;

export const ArticleModal = styled.article` 
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

export const BadgeStar = styled.div`
  transform: translateY(-1em);
  width: 84.7px;
  height: 47.72px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #323232 0%, #0B0B0B 100%);
  border-radius: 50px;
`;

export const ButtonActionStyled = styled.button`
    position: relative;
    padding: ${({ padding }) => padding};
    color: ${({ color }) => color || "none"};
    background-color: ${({ backgroundColor }) => backgroundColor};
    ${BackgroundImageButtons};
    transition: background-color 1s ${({ transition }) => transition};
    &::before{
      --size: 20px;
      position:absolute;
      inset-block-start: -17%;
      inset-inline-end: -47%;
      content: attr(data-length);
      block-size: var(--size);
      inline-size: var(--size);
      line-height: 20px;
      color: var(--text-primary);
      border-radius: 50%;
      background-color: rgba(204, 16, 16, 1);
    }
    &:hover{
      background-color: ${({ backgroundColorHover }) =>
				backgroundColorHover || "none"};
    }
`;

export const NavBarStyled = styled.nav`
    inline-size: 424px;
    menu{
      display: flex;
      gap: 20px;
      inline-size: 100%;
      padding: 0;
    }

    menu li a{

      color: var(--text-primary);
      transition: color 1s ease-in-out;
      &: hover{
        color: #FFA800;
      }

      .isActive{
        color: rgba(255, 168, 0, 1);
      }

    }
`;

/* Container del item responsive abierto a que lo modifiquen */
export const ItemContainerStyled = styled.article`

  block-size: fit-content;
  inline-size: 365px;
  border-radius: 20px;
  padding: 0 25px;
  background-color: #FFF;
  color: var(--background-primary);
  text-align: center;

  header{
    position: relative;
    block-size: 178px;
  }

  h2{
      margin: 10px;
      font-size: 28px;
      font-weight: 500;
  } 

  footer{
    block-size: 90px;
  }
`;
export const ItemImgStyled = styled.img`
    position: absolute;
    inset-block-start: -25%;
    inset-inline: 2%;
    block-size: ${({ blockSize }) => blockSize};
    inline-size:${({ inlineSize }) => inlineSize};
    border-radius:${({ borderRadius }) => borderRadius};
    text-align:center;  
`;

export const ItemDescription = styled.p`
    font-size: 12px;
`;
export const ItemButtonStyled = styled.button`
 
   width: 289px;
   height: 55px;
   font-size: 20px;
   margin: auto;
   border-radius: 4px;
   background-color: var(--button-primary);
   transition: background-color 1s ease-in-out;

    img {
        margin-left: .5em;
    }
    &:hover{
      background-color : var(--button-secondary);
    }

    span {
        font-weight: 600;
    }
`;
export const ItemPeople = styled.p`
    font-size: 16px;
    margin: .5em;
`;
export const ItemPrice = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: .5em;
`;

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 205px;
  margin-top: 4rem;
`;

export const FooterContainerStyled = styled.div`
      display: inherit;
      justify-content: space-between;
      inline-size: 825px;
      div ul li{
        display: flex;
        gap:12px;

        p{
          margin: 5px 0;
        }
      }

    div strong{
      font-size: 1.2rem;
      font-weight: 600;
    }
`;

export const FooterContainerTwo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    strong{
      margin-bottom: 34px;
    } 
    inline-size: 200px;
      ul{
        display: flex;
        gap:18px;
      }
`;
