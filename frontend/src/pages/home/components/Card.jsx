import { Link } from "react-router-dom";
import { CardContainer, CardTitle } from "../styled-components";

const Card = ({ link, img, name }) => {
	return (
		<CardContainer>
			<Link to={link}>
				<img src={`../../../../public/img/${img}`} alt="image" />
				<CardTitle>
					<h2>{name}</h2>
				</CardTitle>
			</Link>
		</CardContainer>
	);
};

export default Card;
