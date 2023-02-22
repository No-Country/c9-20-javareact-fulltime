import { Link } from "react-router-dom";
import { CardStyled } from "../styled-components/layout.styled";
import pizza from "/img/pizza.jpg";
const Card = ({ link, name, id }) => {
	return (
		<CardStyled key={id} img={pizza} cover='cover'>
			<Link to={link}>
				<h2>{name.toUpperCase()}</h2>
			</Link>
		</CardStyled>
	);
};

export default Card;
