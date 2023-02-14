import { Link } from "react-router-dom";
import { CardContainer, CardContent } from "../styled-components";

const Card = ({ link, name }) => {
	return (
		<>
			<CardContainer>
				<Link to={`categoria/${link}`}>
					<h2>{name}</h2>
					<CardContent>
						<img src='\assets\react.svg' alt="image" />
					</CardContent>
				</Link>
			</CardContainer>
		</>
	);
};

export default Card;
