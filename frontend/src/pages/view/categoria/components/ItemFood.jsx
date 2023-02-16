import { Link, Outlet, useParams } from "react-router-dom";
// import { HeaderSubTitle, HeroImage } from "../../../../components";
// import { ItemFoodStyled } from "../styled-components/layout.styled";
// import plato from "/img/platoPasta2.png";
import { cart } from "../../../../../public/icons"
import {
	ItemButton,
	ItemContainer,
	ItemDescription,
	ItemImg,
	ItemPeople,
	ItemPrice,
} from "../../../home/styled-components";

const ItemFood = ({
	description,
	price,
	nameFood,
	image,
	portion,
	id,
	onClick,
	children }) => {
	const { namePath } = useParams();

	return (
		<>
			{!namePath ? (
				// <ItemFoodStyled>
				// 	<Link to={`/categoria/${nameFood}/${id}`}>
				// 		<HeroImage
				// 			img={plato}
				// 			alt='comida'
				// 			blockSize="196px"
				// 			inlineSize='100%'
				// 		/>
				// 		<div>
				// 			<HeaderSubTitle title={name} textAlign='left' level={3} />
				// 			<p>{description}</p>
				// 			<footer>${price}</footer>
				// 		</div>
				// 	</Link>
				// </ItemFoodStyled>
				<ItemContainer>
					<section>
						<ItemImg>
							<img src={image} alt="image" />
							{children}
						</ItemImg>
						<h2>{nameFood}</h2>
						<ItemDescription>{description}</ItemDescription>
						<ItemPeople>{portion} porciones</ItemPeople>
						<ItemPrice>${price}</ItemPrice>
						<Link to={`${id}`}>
							<ItemButton onClick={onClick}>
								<h4>Agregar al Carrito</h4>
								<img src={cart} alt="image-cart" />
							</ItemButton>
						</Link>
					</section>
				</ItemContainer>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default ItemFood;
