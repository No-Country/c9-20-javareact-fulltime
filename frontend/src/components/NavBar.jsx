import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavBarStyled } from "../styled-components";
import loginIcon from "/icons/box-arrow-right.svg"

const NavBar = () => {
	const { role } = useSelector((state) => state.auth);

	return (
		<NavBarStyled>
			<menu>
				<li>
					<NavLink
						to={"/categoria"}
						className={({ isActive }) => (isActive ? "isActive" : undefined)}
					>
						Carta
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/promociones"}
						className={({ isActive }) => (isActive ? "isActive" : undefined)}
					>
						Promociones
					</NavLink>
				</li>

				<li>
					<NavLink
						to={"/contacto"}
						className={({ isActive }) => (isActive ? "isActive" : undefined)}
					>
						Contacto
					</NavLink>
				</li>

				<li>
					<NavLink
						to={role === "" ? "/login" : "/myaccount"}
						className={({ isActive }) => (isActive ? "isActive" : undefined)}
					>
						<span style={{ display: "flex", gap: ".5em" }}>
							{role !== "" ?
								"Mi cuenta" :
								<>
									Iniciar Sesión
									<img src={loginIcon} alt="login icon" />
								</>}
						</span>
					</NavLink>
				</li>
			</menu>
		</NavBarStyled>
	);
};

export default NavBar;
