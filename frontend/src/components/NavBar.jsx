import { useState } from 'react'
import { useSelector } from "react-redux";
import { NavBarStyled, StyledLink, CartWidget} from "../styled-components/NavBarComponent";
import { logo, cart } from "../../public/icons"
import CardList from './CardList';

const NavBar = () => {
  const card = useSelector((state) => state.card);
  const [open, setOpen] = useState(false)
  const toogle = () => open ? setOpen(false) : setOpen(true)

  return (
    <>
      <NavBarStyled>
        <StyledLink to="/">
          <img src={logo} alt="SVG logo image" />
        </StyledLink>

        <ul>
          <StyledLink to="category">Carta</StyledLink>
          <StyledLink to="promotions">Promociones</StyledLink>
          <StyledLink to="contact">Contacto</StyledLink>
          <StyledLink to="myaccount">Mi Cuenta</StyledLink>
          <CartWidget>
            <img src={cart} onClick={() => toogle()} />
            {card.length > 0 && <span>{card.length}</span>}
          </CartWidget>
        </ul>
      </NavBarStyled>
      {open && card.length > 0 && <CardList setOpen={setOpen} />}
    </>
  )
}

export default NavBar