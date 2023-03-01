import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/slice/cart.slice";

import { Link } from "react-router-dom";
import Tabbar from "./Tabbar";
import NavBottom from "./NavBottom";
import NavSide from "./NavSide";
import { NavBar } from ".";
import ButtonAction from "./ButtonAction"
import { HeaderStyled } from "../styled-components";
import logo from "/icons/logo.svg";
import cart from "/icons/carWhite.svg";

const Header = () => {
	const dispatch = useDispatch();
	const car = useSelector((state) => state.cart.items);
	const handleOpen = () => dispatch(openCart());

	return (
		<HeaderStyled>
			<NavSide />
			<Tabbar />
			<Link to='/'>
				<img src={logo} alt='country' />
			</Link>
			<NavBar items={["Carta", "Promociones", "Contacto", "Mi cuenta"]} />
			<ButtonAction
					img={cart}
					size="cover"
					backgroundColor={"transparent"}
					onClick={handleOpen}
					padding={"1em"}
					dataLength={car.length}
					opacity={car.length === 0}
				/>
			<NavBottom />
		</HeaderStyled>
	);
};

export default Header;
