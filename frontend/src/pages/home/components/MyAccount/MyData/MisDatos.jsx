import React from "react";
import { useState } from "react";
import { MyDataStyle } from "../../../styled-components/MyAccountComponent";

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
      <MyDataStyle>
        <form action="">
          <label htmlFor="name">Nombre y apellido</label>
          <br />
          <input
            placeholder="Ingrese su nombre y apellido"
            required
            type="text"
            id="name"
            onChange={(e) => setNameAndSurname(e.target.value)}
            value={NameAndSurname}
          />
          <br />
          <div className="postalCode_location">
            <label htmlFor="postalCode">Codigo postal</label>
            <div className="location">
              <label htmlFor="location">Localidad</label>
            </div>
          </div>
          <input
            required
            placeholder="Ingrese el codigo postal"
            type="text"
            id="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
          />
          <input
            required
            placeholder="Ingrese su localidad (ciudad)"
            type="text"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <br />
          <div className="address">
            <div className="street">
              <label htmlFor="street">Calle</label>
            </div>
            <div className="number">
              <label htmlFor="number">Número</label>
            </div>
            <div className="piso">
              <label htmlFor="floor">Piso</label>
            </div>
          </div>
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
          <div className="contact_email">
            <label htmlFor="contact">Contacto</label>
            <div className="email">
              <label htmlFor="email">Correo electronico</label>
            </div>
          </div>
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
          <div className="moreDetails">
            <label htmlFor="moreDetails">Aclaracion (opcional)</label>
          </div>
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
      </MyDataStyle>
    </>
  );
}
