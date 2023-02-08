import React from 'react'
import { NavBarStyled } from "../styled-components/NavBarComponent";

const NavBar = () => {
  return (
    <NavBarStyled>
      LOGO
      <input type="text" placeholder='Buscar'/>
      <ul>
        <li>Carta</li>
        <li>Promociones</li>
        <li>Contacto</li>
        <li>Mi Cuenta</li>
      </ul>
      Cart
    </NavBarStyled>
  )
}

export default NavBar