import React from "react";
import { useState } from "react";

const MisTarjetas = () => {
  const [NameAndSurname, setNameAndSurname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  return (
    <>
      <form action="">
        <b>Medios de pago</b> <br />
        <input required type="radio" name="card" id="debit" value="debit" />
        <label htmlFor="debit">Debito</label>
        <input required type="radio" name="card" id="credit" value="credit" />
        <label htmlFor="credit">Credito</label>
        <label htmlFor="name">Nombre y apellido</label>
        <input
          required
          type="text"
          id="name"
          onChange={(e) => setNameAndSurname(e.target.value)}
          value={NameAndSurname}
        />
        <label htmlFor="cardNumber">Numero de tarjeta</label>
        <input
          required
          type="text"
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
          value={cardNumber}
        />
        <label htmlFor="cvv">CVV</label>
        <input
          required
          maxlength="3"
          id="cvv"
          onChange={(e) => setCvv(e.target.value)}
          value={cvv}
          type="password"
        />
        <label htmlFor="expirationDate">Fecha de vencimiento</label>
        <input
          required
          placeholder="MM/YY"
          type="text"
          id="expirationDate"
          onChange={(e) => setExpirationDate(e.target.value)}
          value={expirationDate}
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default MisTarjetas;
