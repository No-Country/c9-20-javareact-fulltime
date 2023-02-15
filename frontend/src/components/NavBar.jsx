import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/slice/cart.slice";
import { NavBarStyled, StyledLink, CartWidget } from "../styled-components/NavBarComponent";
import { logo, cart } from "../../public/icons"
import CardList from './CardList';

const NavBar = () => {
  const dispatch = useDispatch();
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
          <StyledLink to="categoria">Carta</StyledLink>
          <StyledLink to="promotions">Promociones</StyledLink>
          <StyledLink to="contact">Contacto</StyledLink>
          <StyledLink to="myaccount">Mi Cuenta</StyledLink>
          <CartWidget>
            <button onClick={() => dispatch(openCart())}>
              <img src={cart} />
            </button>
            {/* badge indica el numero en el carrito */}
            {/* {card && card.length > 0 && <span>{card.length}</span>} */}
          </CartWidget>
        </ul>
      </NavBarStyled>
      {open && card.length > 0 && <CardList setOpen={setOpen} />}
    </>
  )
}

export default NavBar;
