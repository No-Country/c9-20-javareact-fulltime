import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useSearch from "../pages/home/hook/useSearch";

import { NavBottomStyled } from "../styled-components";

import loginIcon from "/icons/box-arrow-right.svg"
import homeIcon from "/icons/home-navbar.svg"
import accountIcon from "/icons/account-navbar.svg"
import cartaIcon from "/icons/carta-navbar.svg"
import promosIcon from "/icons/promos-navbar.svg"
import searchIcon from "/icons/search.svg"

const NavBottom = () => {
  const {
		active,
		handleActive,
		handleDesActive
	} = useSearch();

	const accessToken = useSelector((state) => state.auth.accessToken)

  return (
    <NavBottomStyled>
      <menu>
        <li className="home">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            <p>Home</p>
            <img className="svg" src={homeIcon} alt="icon" />
          </NavLink>
        </li>

        <li>
          <NavLink to={"/search"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            <p>Buscar</p>
            <img className="svg" src={searchIcon} alt="icon" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/categoria"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            <p>Carta</p>
            <img className="svg" src={cartaIcon} alt="icon" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/promociones"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            <p>Promos</p>
            <img className="svg" src={promosIcon} alt="icon" />
          </NavLink>
        </li>

        <li className="myaccount">
          <NavLink
            to={accessToken ? "/myaccount" : "/login"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            {accessToken ?
              <>
                <p>Mi cuenta</p>
                <img className="svg" src={accountIcon} alt="icon" />
              </>
              :
              <>
                <p>Mi cuenta</p>
                <img className="svg" src={loginIcon} alt="login icon" />
              </>}
          </NavLink>
        </li>
      </menu>
    </NavBottomStyled>
  )
}

export default NavBottom