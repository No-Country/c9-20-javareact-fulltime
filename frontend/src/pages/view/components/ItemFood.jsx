import HeaderSubTitle from "../../../components/HeaderSubTitle";
import HeroImage from "../../../components/HeroImage";
import { ItemFoodStyled } from "../styled-components/layout.styled";
import react from "/assets/react.svg";

const ItemFood = ({ title, description, price, onClick }) => {
	return (
		<ItemFoodStyled onClick={onClick}>
			<div>
				<HeroImage
					img={react}
					alt='comida'
					blockSize="196px"
					inlineSize='100%'
				/>
			</div>
			<div>
				<HeaderSubTitle title={title} textAlign='left' level={3} />
				<p>{description}</p>
				<footer>${price}</footer>
			</div>
		</ItemFoodStyled>
	);
};

export default ItemFood;
