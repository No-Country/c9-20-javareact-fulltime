import HeaderSubTitle from "../../../components/HeaderSubTitle";
import HeroImage from "../../../components/HeroImage";
import { ItemFoodStyled } from "../styled-components/layout.styled";

const ItemFood = ({ title, image, description, price, onClick }) => {
	return (
		<ItemFoodStyled onClick={onClick}>
			<div>
				<HeroImage
					img={image}
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
