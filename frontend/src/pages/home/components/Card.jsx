import { Link } from "react-router-dom";
import { CardTitle } from "../styled-components/layout.styled";
import { CardContainer } from "./../styled-components/CardComponents";
import img from "/img/cafe.jpg";
const Card = ({ link, name, id }) => {
	return (
		<CardContainer>
			<Link to={link}>
				<img src={img} alt="image" />
				<CardTitle>
					<h2>{name}</h2>
				</CardTitle>
			</Link>
		</CardContainer>
	);
};

export default Card;
