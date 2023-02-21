import { Link } from "react-router-dom";
import { NavBar } from ".";
import { HeaderStyled } from "../styled-components";
import logo from "/icons/logo.svg";

const Header = () => {
	return (
		<HeaderStyled>
			<Link to='/'>
				<img src={logo} alt='country' />
			</Link>
			<NavBar items={["Carta", "Promociones", "Contacto", "Mi cuenta"]} />
		</HeaderStyled>
	);
};

export default Header;
