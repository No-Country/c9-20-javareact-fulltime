import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openCart } from "../redux/slice/cart.slice";
import { NavBarStyled } from "../styled-components";
import ButtonAction from "./ButtonAction";
import cart from "/icons/carWhite.svg";

const NavBar = ({ items }) => {
	const dispatch = useDispatch();
	const car = useSelector((state) => state.cart.items);
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
					dataLength={car.length}
				/>
			</menu>
		</NavBarStyled>
	);
};

export default NavBar;
