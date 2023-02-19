import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openCart } from "../redux/slice/cart.slice";
import { NavBarStyled } from "../styled-components";
import ButtonAction from "./ButtonAction";
import cart from "/icons/carWhite.svg";

const NavBar = ({ items }) => {
	const dispatch = useDispatch();
	const car = useSelector((state) => state.cart.items);
	let activeStyle = {
		color: "#FFA800",
	};

	const handleOpen = () => dispatch(openCart());
	return (
		<NavBarStyled>
			<menu>
				<li>
					<NavLink
						to={"/categoria"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						categoria
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/promociones"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						promociones
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/contacto"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						contacto
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/MiCuenta"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						mi cuenta
					</NavLink>
				</li>

				<ButtonAction
					img={cart}
					size='cover'
					backgroundColor={"transparent"}
					onClick={handleOpen}
					padding={"1em"}
					dataLength={car.length}
					opacity={car.length === 0}
				/>
			</menu>
		</NavBarStyled>
	);
};

export default NavBar;
