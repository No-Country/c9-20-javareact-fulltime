import styled from "styled-components";

export const ContactStyled = styled.section`    
    background-color: rgba(45, 45, 45, 1);
    padding: 2em 130px;
   section:nth-child(3) {
    margin-bottom: 0;
   }
`;

export const ContactSection = styled.section`
  background-color: rgba(45, 45, 45, 1);
  margin-bottom: 2.5em;
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: .5em;
  }
  img {
    padding-right: 20px;
  }
  li {
    margin: 20px 0;
  }
  p {
    margin: 0;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin: 20px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--background-secondary);
    border: 1px solid #ACACAC;
    color: var(--text-primary);
  }
  button {
    align-self: flex-end;
    width: 138px;
    height: 30px;
    background-color: var(--button-primary);
    border-radius: 4px;
    font-weight: 600;
    font-size: 15px;
   }
`;
