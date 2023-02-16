import styled from "styled-components";

export const MyAccountStyle = styled.div`
  background-color: #2d2d2d;
  height: 1024px;
  width: 100%;
  border-radius: 0;

  h1 {
    margin: 0;
    color: #fff;
  }

  label {
    color: #c3c2c4;
  }

  button {
    color: #fff;
  }

  .line {
    border: 0.5px solid #fff;
    margin: 41px 0px 64px 0px;
  }

  .Container {
    display: flex;
    flex-flow: row;
  }

  .Seleccion {
    display: flex;
    flex-flow: column;
  }

  button:hover {
    color: brown;
    text-align: center;
  }
`;
