import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 205px;
  margin-top: 5em;
  color: #FFF;
  background-color: #000;
  
  section {
    width: 100%;
    display: flex;
    justify-content: space-around;

    h3 {
      font-size: 20px;
      line-height: 30px;
      margin: .5em 0;
      font-weight: 100;
    }
    img {
      margin-right: 1em;
    }
    ul {
      line-height: 2em;
    }
  }
`