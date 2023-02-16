import React from "react";
import { MyAccountStyle } from "../../styled-components/MyAccountComponent";
import MisDatos from "./MyData/MisDatos";
import MisTarjetas from "./MyCards/MisTarjetas";
import MisPedidos from "./MyOrders/MisPedidos";
import CerrarSesion from "./LogOut/CerrarSesion";
import userImg from "./image/user.png";
import cardImg from "./image/card.png";
import cartImg from "./image/cart.png";
import logOutImg from "./image/logOut.png";

export default function MyAccount() {
  const [misDatos, setMisDatos] = React.useState(true);
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
    <MyAccountStyle>
      <div className="MyAccount">
        <h1>MiCuenta</h1>
        <div className="line"></div>
        <div className="container">
          <div className="selection">
            <div className="myData">
              <img width="19px" src={userImg}></img>
              <button name="Datos" onClick={(e) => activacion(e)}>
                Mis datos
              </button>
            </div>
            <div className="myCards">
              <img width="19px" src={cardImg}></img>
              <button name="Tarjetas" onClick={(e) => activacion(e)}>
                Mis tarjetas
              </button>
            </div>
            <div className="myOrders">
              <img width="19px" src={cartImg}></img>
              <button name="Pedidos" onClick={(e) => activacion(e)}>
                Mis pedidos
              </button>
            </div>
            <div className="logOut">
              <img width="19px" src={logOutImg}></img>
              <button name="Sesion" onClick={(e) => activacion(e)}>
                Cerrar Sesión
              </button>
            </div>
          </div>
          <div className="line2"></div>
          <div>
            {misDatos && <MisDatos />}
            {misTarjetas && <MisTarjetas />}
            {misPedidos && <MisPedidos />}
            {cerrarSesion && <CerrarSesion />}
          </div>
        </div>
      </div>
    </MyAccountStyle>
  );
}
