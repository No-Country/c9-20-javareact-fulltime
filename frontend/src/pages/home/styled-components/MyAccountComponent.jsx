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
`;

export const MyDataStyle = styled.div`
  input {
    width: 1160px;
    height: 40px;
    border: solid #acacac 1.75px;
    background-color: transparent;
    border-radius: 5px;
  }

  .postalCode_location,
  .address {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .contact_email {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .moreDetails {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .location {
    margin-right: 500px;
  }

  .number {
    margin-left: 320px;
  }

  .piso {
    margin-right: 260px;
  }

  .email {
    margin-right: 430px;
  }

  #postalCode,
  #location,
  #street,
  #contact,
  #email {
    width: 577.5px;
  }

  #postalCode,
  #street,
  #number,
  #contact {
    margin-right: 5px;
  }

  #number,
  #floor {
    width: 286.25px;
  }
`;
