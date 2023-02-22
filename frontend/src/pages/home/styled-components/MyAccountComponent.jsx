import styled from "styled-components";

export const MyAccountStyle = styled.div`
  background-color: #2d2d2d;
  width: 100%;
  border-radius: 0;
  padding: 60px 80px;

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
    border: 0.5px solid #acacac;
    margin: 41px 0px 64px 0px;
  }

  .line2 {
    border: 0.5px solid #acacac;
    margin: 0 25px 0 50px;
  }

  .selection {
    width: 80px;
    font-family: "Poppins";
    display: flex;
    flex-flow: column;
  }

  .selection div {
    display: flex;
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
    padding-left: 25px;
    color: white;
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

  button {
    border-radius: 4px;
    background-color: #ffa800;
    color: black;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    padding: 10px 70px;
    margin-top: 50px;
    cursor: pointer;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

export const MyCardsStyle = styled.div`
  p {
    color: white;
    margin: 0;
  }

  .radio {
    margin: 15px 0 20px 0;
    display: flex;
  }

  .debito {
    margin-right: 45px;
    display: flex;
  }

  .credito {
    display: flex;
  }

  .debito input[type="radio"],
  .credito input[type="radio"] {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
  }

  div > input[type="radio"] {
    display: none;
  }

  div > input[type="radio"] + *::before {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: #ffa800;
    margin-bottom: 3px;
  }

  div > input[type="radio"]:checked + *::before {
    background: radial-gradient(
      #ffa800 0%,
      #ffa800 40%,
      transparent 50%,
      transparent
    );
    border-color: #ffa800;
  }

  input[type="text"],
  input[type="password"] {
    width: 1160px;
    height: 40px;
    border: solid #acacac 1.75px;
    background-color: transparent;
    border-radius: 5px;
    padding-left: 25px;
    color: white;
  }

  #cardNumber,
  #cvv,
  #expirationDate {
    width: 577.5px;
  }

  .card,
  .expDate {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  #cardNumber {
    margin-right: 5px;
  }

  .cvv {
    margin-right: 550px;
  }

  button {
    border-radius: 4px;
    background-color: #ffa800;
    color: black;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 20px;
    padding: 10px 70px;
    margin-top: 50px;
    cursor: pointer;
  }

  .button {
    display: flex;
    justify-content: flex-end;
  }

  // .debito input {
  //   visibility: hidden;
  //   position: absolute;
  //   right: 0;
  // }

  // .debito input,
  // .content-select select {
  //   appearance: none;
  //   -webkit-appearance: none;
  //   -moz-appearance: none;
  // }

  // .debito {
  //   position: relative;
  //   margin-bottom: 30px;
  //   padding: 5px 0 5px 60px; /* Damos un padding de 60px para posicionar el elemento <i> en este espacio*/
  //   display: block;
  // }

  // /* Estas reglas se aplicarán a todos las elementos i después de cualquier input*/
  // .debito input + i {
  //   background: #f0f0f0;
  //   border: 2px solid rgba(0, 0, 0, 0.2);
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  // }

  // /* Estas reglas se aplicarán a todos los i despues de un input de tipo radio*/
  // .debito input[type="radio"] + i {
  //   height: 30px;
  //   width: 30px;
  //   border-radius: 100%;
  //   left: 15px;
  // }

  // .debito input[type="radio"] + i:before {
  //   content: "";
  //   display: block;
  //   height: 18px;
  //   width: 18px;
  //   background: red;
  //   border-radius: 100%;
  //   position: absolute;
  //   z-index: 1;
  //   top: 4px;
  //   left: 4px;
  //   background: #2ac176;
  //   transition: all 0.25s ease; /* Todas las propiedades | tiempo | tipo movimiento */
  //   transform: scale(0) /* Lo reducimos a 0*/;
  //   opacity: 0; /* Lo ocultamos*/
  // }

  // .debito input[type="radio"]:checked + i:before {
  //   transform: scale(1);
  //   opacity: 1;
  // }

  // .debito:hover input[type="radio"]:not(:checked) + i {
  //   background: #b1e8cd;
  // }
`;
