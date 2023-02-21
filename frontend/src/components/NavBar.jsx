import { NavBarStyled } from "../styled-components/NavBarComponent";

const NavBar = () => {
  const pathname = window.location.pathname
  const routesNotShow = ["/login", "/signup"]
  const showNavBar = !routesNotShow.includes(pathname)

  return (
    showNavBar && (
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
  )
}

export default NavBar