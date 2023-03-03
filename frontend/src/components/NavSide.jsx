import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../redux/slice/cart.slice";
import { NavLink } from "react-router-dom";
import { NavSideStyled, ButtonCarListExitStyled } from "../styled-components";
import logo from "/icons/logo.svg";
import crossIcon from "/icons/cross-icon.svg";

const NavSide = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cart.openMenu);
	const accessToken = useSelector((state) => state.auth.accessToken)

	const handleMenu = () => dispatch(openMenu(false));

  return (

    <NavSideStyled
      translateX={open ? "translateX(0%)" : "translateX(-100%)"}
      onMouseLeave={handleMenu}
    >
      <header>
        <img src={logo} alt='country' />
        <ButtonCarListExitStyled
          onClick={handleMenu}
          img={crossIcon}
        />
      </header>
      <menu>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={"/login"}>
            Iniciar sesión
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={""}>
            Mi carrito
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={accessToken ? "/myaccount" : "/login"}>
            Mis datos
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={""}>
            Mis tarjetas
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={""}>
            Mis pedidos
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={"/contacto"}>
            Nosotros
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={""}>
            Reservas
          </NavLink>
        </li>
        <li
          onClick={handleMenu}
        >
          <NavLink
            to={"/logout"}>
            Cerrar sesión
          </NavLink>
        </li>
      </menu>
    </NavSideStyled>
  )
}

export default NavSide