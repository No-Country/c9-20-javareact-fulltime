import { DescriptionStyled } from "../styled-components/layout.styled";
const Description = ({ description, delay, price }) => {
	return (
		<DescriptionStyled>
			<strong>Descripción del Plato</strong>
			<p>{description}</p>
			<p>{delay.toUpperCase()}</p>
			<p>${price}</p>
		</DescriptionStyled>
	);
};

export default Description;