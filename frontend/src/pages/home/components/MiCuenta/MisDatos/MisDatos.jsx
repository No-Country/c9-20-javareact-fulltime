import React from "react";
import { useState } from "react";

export default function MisDatos() {
  const [NameAndSurname, setNameAndSurname] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [moreDetails, setmoreDetails] = useState("");

  return (
    <>
      <form action="">
        <label htmlFor="name">Nombre y apellido</label>
        <input
          required
          type="text"
          id="name"
          onChange={(e) => setNameAndSurname(e.target.value)}
          value={NameAndSurname}
        />
        <label htmlFor="postalCode">Codigo postal</label>
        <input
          required
          type="text"
          id="postalCode"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
        />
        <label htmlFor="location">Localidad</label>
        <input
          required
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <label htmlFor="street">Calle</label>
        <input
          required
          type="text"
          id="street"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
        />
        <label htmlFor="number">Numero</label>
        <input
          required
          type="text"
          id="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <label htmlFor="floor">Piso(opcional)</label>
        <input
          type="text"
          id="floor"
          onChange={(e) => setFloor(e.target.value)}
          value={floor}
        />
        <label htmlFor="contact">Contacto</label>
        <input
          required
          type="text"
          id="contact"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
        <label htmlFor="email">Correo electronico</label>
        <input
          required
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="moreDetails">Aclaracion (opcional)</label>
        <input
          type="text"
          id="moreDetails"
          onChange={(e) => setmoreDetails(e.target.value)}
          value={moreDetails}
        />
        <button>Guardar</button>
      </form>
    </>
  );
}
