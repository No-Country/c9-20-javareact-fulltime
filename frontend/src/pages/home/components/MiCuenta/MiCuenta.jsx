import React from "react";
import "./MiCuenta.css";
import MisDatos from "./MisDatos/MisDatos";
import MisTarjetas from "./MisTarjetas/MisTarjetas";

export default function MiCuenta() {
  const [misDatos, setMisDatos] = React.useState(false);
  const [misTarjetas, setMisTarjetas] = React.useState(false);
  const [misPedidos, setMisPedidos] = React.useState(false);
  const [cerrarSesion, setCerrarSesion] = React.useState(false);

  function setAuto(set) {
    setMisDatos(false);
    setMisTarjetas(false);
    setMisPedidos(false);
    setCerrarSesion(false);
    set(true);
  }

  const activacion = (e) => {
    let boton = e.target.name;
    switch (boton) {
      case "Datos":
        setAuto(setMisDatos);

        break;
      case "Tarjetas":
        setAuto(setMisTarjetas);

        break;
      case "Pedidos":
        setAuto(setMisPedidos);

        break;
      case "Sesion":
        setAuto(setCerrarSesion);

        break;
      default:
        null;
    }
  };

  return (
    <div className="MiCuenta">
      <h1>MiCuenta</h1>
      <div className="Container">
        <div className="Seleccion">
          <button name="Datos" onClick={(e) => activacion(e)}>
            Mis datos
          </button>
          <button name="Tarjetas" onClick={(e) => activacion(e)}>
            Mis tarjetas
          </button>
          <button name="Pedidos" onClick={(e) => activacion(e)}>
            Mis pedidos
          </button>
          <button name="Sesion" onClick={(e) => activacion(e)}>
            Cerrar Sesión
          </button>
        </div>
        <div>
          {misDatos && <MisDatos />}
          {misTarjetas && <MisTarjetas />}
          {misPedidos && "Mis pedidos componente"}
          {cerrarSesion && "Mi cerrar  sesion componente"}
        </div>
      </div>
    </div>
  );
}
