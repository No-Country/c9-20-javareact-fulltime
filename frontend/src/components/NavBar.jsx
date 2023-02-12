import React from "react";
import { useDispatch } from "react-redux";
import { openCart } from "../redux/slice/cart.slice";
import { NavBarStyled } from "../styled-components/NavBarComponent";

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<NavBarStyled>
			LOGO
			<input type="text" placeholder='Buscar' />
			<ul>
				<li>Carta</li>
				<li>Promociones</li>
				<li>Contacto</li>
				<li>Mi Cuenta</li>
			</ul>
			<button onClick={() => dispatch(openCart())}>card</button>
		</NavBarStyled>
	);
};

export default NavBar;
