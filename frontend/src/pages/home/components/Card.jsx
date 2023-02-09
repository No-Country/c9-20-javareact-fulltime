import { Link } from "react-router-dom";
import { CardContainer, CardContent } from "../styled-components";
const Card = () => {
	return (
		<>
			<CardContainer>
				<Link to="/view">
					<h1>Pastas</h1>
					<CardContent>
						<img src='\assets\react.svg' alt="image" />
					</CardContent>
				</Link>
			</CardContainer>
		</>
	);
};

export default Card;
