import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useSearch from "../pages/home/hook/useSearch";

import { NavBottomStyled } from "../styled-components";

import accountIcon from "/assets/icons/account-navbar.svg";
import loginIcon from "/assets/icons/box-arrow-right.svg";
import cartaIcon from "/assets/icons/carta-navbar.svg";
import homeIcon from "/assets/icons/home-navbar.svg";
import promosIcon from "/assets/icons/promos-navbar.svg";
import searchIcon from "/assets/icons/search.svg";

const NavBottom = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const { active, handleActive, handleDesActive } = useSearch();

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
          <span>
            <p>Buscar</p>
            <img className="svg" src={searchIcon} alt="icon" />
          </span>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            <p>Buscar</p>
            <img className="svg" src={searchIcon} alt="icon" />
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
            {accessToken ? (
              <>
                <p>Mi cuenta</p>
                <img className="svg" src={accountIcon} alt="icon" />
              </>
            ) : (
              <>
                <p>Mi cuenta</p>
                <img className="svg" src={loginIcon} alt="login icon" />
              </>
            )}
          </NavLink>
        </li>
        <li className="myaccount">
          <NavLink
            to={accessToken ? "/myaccount" : "/login"}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            {accessToken ? (
              <>
                <p>Mi cuenta</p>
                <img className="svg" src={accountIcon} alt="icon" />
              </>
            ) : (
              <>
                <p>Mi cuenta</p>
                <img className="svg" src={loginIcon} alt="login icon" />
              </>
            )}
          </NavLink>
        </li>
      </menu>
    </NavBottomStyled>
  );
};

export default NavBottom;
