import styled from "styled-components";

export const MyAccountStyle = styled.div`
  background-color: #2d2d2d;
  height: 1024px;
  width: 100%;
  border-radius: 0;
  padding: 180px 80px;

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

  .line2 {
    border: 0.5px solid #fff;
    margin: 0 25px 0 50px;
  }

  .selection {
    display: flex;
    flex-flow: column;
  }

  .selection div {
    display: flex;
  }

  button:hover {
    color: brown;
    text-align: center;
  }

  .container {
    display: flex;
  }
  .postalCode_localidad {
    height: fit-content;
  }

  input {
    border: solid #acacac 1px;
    border-radius: 3px;
    background-color: transparent;
  }
`;
