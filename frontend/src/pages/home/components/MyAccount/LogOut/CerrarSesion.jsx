import React from "react";

export default function () {
  return (
    <div>
      <label htmlFor="name">Nombre y apellido</label>
      <input type="text" id="name" />
      <br />
      <label htmlFor="email">Correo Electronico</label>
      <input type="text" id="email" />
      <br />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" />
      <button style={{ backgroundColor: "black", color: "white" }}>
        Cerrar Sesión
      </button>
    </div>
  );
}
