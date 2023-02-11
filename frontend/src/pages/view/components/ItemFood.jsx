import HeaderSubTitle from "../../../components/HeaderSubTitle";
import HeroImage from "../../../components/HeroImage";
import { ItemFoodStyled } from "../styled-components/layout.styled";
import react from "/assets/react.svg";

const ItemFood = ({ onClick }) => {
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
				<HeaderSubTitle title='Tallarines' textAlign='left' level={3} />
				<p>Descripción</p>
				<footer>$740</footer>
			</div>
		</ItemFoodStyled>
	);
};

export default ItemFood;
