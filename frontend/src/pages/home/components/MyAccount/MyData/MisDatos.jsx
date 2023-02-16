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
        <br />
        <input
          placeholder="Ingrese su nombre y apellido"
          size="169px"
          required
          type="text"
          id="name"
          onChange={(e) => setNameAndSurname(e.target.value)}
          value={NameAndSurname}
        />
        <br />
        <div className="postalCode_localidad">
          <label htmlFor="postalCode">Codigo postal</label>
          <label htmlFor="location">Localidad</label>
        </div>
        <input
          required
          placeholder="Ingrese el codigo postal"
          size="80px"
          type="text"
          id="postalCode"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
        />
        <input
          required
          placeholder="Ingrese su localidad (ciudad)"
          size="80px"
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <br />
        <label htmlFor="street">Calle</label>
        <label htmlFor="number">Numero</label>
        <label htmlFor="floor">Piso(opcional)</label>
        <br />
        <input
          placeholder="Ingrese la direccion de su domicilio"
          required
          type="text"
          id="street"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
        />
        <input
          placeholder="Ingrese el numero"
          required
          type="text"
          id="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <input
          placeholder="Ingrese el numero"
          type="text"
          id="floor"
          onChange={(e) => setFloor(e.target.value)}
          value={floor}
        />
        <br />
        <label htmlFor="contact">Contacto</label>
        <label htmlFor="email">Correo electronico</label>
        <br />
        <input
          placeholder="Ingrese su numero de telefono"
          required
          type="text"
          id="contact"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
        <input
          placeholder="Ingrese su correo electronico"
          required
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="moreDetails">Aclaracion (opcional)</label>
        <br />
        <input
          placeholder="Deje una aclaracion de su domicilio aqui"
          type="text"
          id="moreDetails"
          onChange={(e) => setmoreDetails(e.target.value)}
          value={moreDetails}
        />
        <br />
        <button>Guardar</button>
      </form>
    </>
  );
}
