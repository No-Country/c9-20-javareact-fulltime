import { StarStyled } from "../styled-components/layout.styled";
import star from "/icons/Star.svg";
const Star = () => {
	return (
		<StarStyled>
			<img src={star} alt='star' />
			<span>4.9</span>
		</StarStyled>
	);
};

export default Star;
