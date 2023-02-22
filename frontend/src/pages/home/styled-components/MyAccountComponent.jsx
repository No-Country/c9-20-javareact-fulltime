import styled from "styled-components";

export const MyAccountStyle = styled.div`
  background-color: #2d2d2d;
  height: 1024px;
  width: 100%;
  border-radius: 0;
  padding: 50px 80px;

  p {
    font-size: x-large;
    margin: 0;
    color: #fff;
  }

  label {
    color: #c3c2c4;
  }

  button {
    font-size: large;
    font-family: var(--font-family);
    color: #fff;
  }

  .line {
    border: 0.5px solid #fff;
    margin: 20px 0px 10px 0px;
  }

  .line2 {
    border: 0.5px solid #fff;
    height: 400px;

  }

  .apartados {
    display: flex;
    flex-flow: column;
    width: 217px;
    gap: 15px;
    
    button {
      color: #FFFFFF;
      font-size: 24px;
    }

    button:hover {
      color: #FCDB9B;
    }
  }

  // .selection div {
  //   display: flex;
  // }



  img{
    width:19px;
    height: auto;
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


export const MyOrdersStyle = styled.div`
  .titularPedidos {
    font-size: 15px;
    color: #ACACAC;
    padding: 20px 0 0px 25px;
  }

  .descripcionPedidos{
    padding: 20px 0 0px 25px;
    font-size: 15px;
  }
`
export const LogOurStyle = styled.div`
  .contenedorLogOut{
    padding: 20px 0 0px 25px;
  }
  label {
    font-size: 16px;
  }

  input {
    width: 446px;
    height: 40px;
    border: solid #acacac 1.75px;
    background-color: transparent;
    border-radius: 5px;
  }

  button {
    background-color: #FFA800;
    color: black;
    border-radius: 3px;
    margin-top: 25px;
    float: right; 
  }
`
