import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { NavBarStyled } from "../styled-components/NavBarComponent";
import CardList from './CardList';

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <Link to="/">LOGO</Link>
        <input type="text" placeholder='Buscar' />
        <ul>
          <Link to="category">Carta</Link>
          <Link to="promotions">Promociones</Link>
          <Link to="contact">Contacto</Link>
          <Link to="myaccount">Mi Cuenta</Link>
        </ul>
        <CardList />
      </NavBarStyled>
    </>

  )
}

export default NavBar