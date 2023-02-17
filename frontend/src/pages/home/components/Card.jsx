import { Link } from "react-router-dom";
import img from "/img/cafe.jpg";
const Card = ({ link, name, id }) => {
	return (
		<CardContainer key={id}>
			<Link to={link}>
				<CardContent>
					<img src={img} alt="image" />
				</CardContent>
				<CardTitle>
					<h2>{name}</h2>
				</CardTitle>
			</Link>
		</CardContainer>
	);
};

export default Card;
