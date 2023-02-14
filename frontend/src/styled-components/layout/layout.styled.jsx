import styled from "styled-components";
import {
	BackgroundImageButtons,
	FlexBoxCenter,
} from "../reusable/reusable.styled";

export const HeaderSubtitleStyled = styled.header`
    color: #FFF;
    text-align: ${({ textAlign }) => textAlign}; 
`;

//TODO Div responsive abierto a modificar */
export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
    margin:15px;
    justify-content: space-around;
    justify-items: center;
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
    block-size: 100vh;
    inline-size: 100%;
    background-color: rgba(255, 252, 252, 1); 
    z-index: 2;
    visibility: ${({ visibility }) => visibility};


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
