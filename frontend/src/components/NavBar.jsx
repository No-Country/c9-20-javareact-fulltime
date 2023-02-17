import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openCart } from "../redux/slice/cart.slice";
<<<<<<< HEAD
import { NavBarStyled } from "../styled-components";
import ButtonAction from "./ButtonAction";
import CardList from "./CardList";
import cart from "/icons/carWhite.svg";
const NavBar = ({ items }) => {
	const dispatch = useDispatch();
	const card = useSelector((state) => state.card);
	const [open, setOpen] = useState(false);
	const activeStyle = {
		backgroundColor: " #FFA800",
	};
	const handleOpen = () => dispatch(openCart());
	return (
		<NavBarStyled>
			<menu>
				{items.map((name, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index}>
						<NavLink
							to={name}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{name}
						</NavLink>
					</li>
				))}
				<ButtonAction
					img={cart}
					size='cover'
					backgroundColor={"transparent"}
					onClick={handleOpen}
					padding={"1em"}
				/>
			</menu>
			{open && card.length > 0 && <CardList setOpen={setOpen} />}
		</NavBarStyled>
	);
};
=======
import { NavBarStyled, StyledLink, CartWidget } from "../styled-components/NavBarComponent";
import { logo, cart } from "../../public/icons"
import CardList from './CardList';

const NavBar = () => {
  const dispatch = useDispatch();
	const carrito = useSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false)

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
            {carrito && carrito.length > 0 && <span>{carrito.length}</span>}
          </CartWidget>
        </ul>
      </NavBarStyled>
      {open && card.length > 0 && <CardList setOpen={setOpen} />}
    </>
  )
}
>>>>>>> 7c7bc5441e552a90d16a60b135447f157f971d0e

export default NavBar;
