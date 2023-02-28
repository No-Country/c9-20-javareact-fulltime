import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "../redux/slice/Auth.slice";
import { NavLink } from "react-router-dom";
import { openCart } from "../redux/slice/cart.slice";
import { NavBarStyled } from "../styled-components";
import ButtonAction from "./ButtonAction";
import cart from "/icons/carWhite.svg";
import loginIcon from "/icons/box-arrow-right.svg"

const NavBar = (cd) => {
	const dispatch = useDispatch();
	const car = useSelector((state) => state.cart.items);
	const accessToken = useSelector((state) => state.auth.accessToken)

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
						Carta
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/promociones"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Promociones
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/contacto"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Contacto
					</NavLink>
				</li>
				
				<li>
					<NavLink
						to={accessToken ? "/myaccount" : "/login"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<span style={{display: "flex", gap: ".5em"}}>
							{accessToken ?
								"Mi cuenta" :
								<>
									Iniciar Sesión
									<img src={loginIcon} alt="login icon" />
								</>}
						</span>
					</NavLink>
				</li>
				
				<ButtonAction
					img={cart}
					size="cover"
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
