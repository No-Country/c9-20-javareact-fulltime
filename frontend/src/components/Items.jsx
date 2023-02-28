import {
	ItemButtonStyled,
	ItemContainerStyled,
	ItemDescription,
	ItemImgStyled,
	ItemPeople,
	ItemPrice,
} from "./../styled-components/layout/layout.styled";
import car from "/icons/cart.svg";
const Items = ({ title, image, description, people, price, id }) => {
	return (
		<ItemContainerStyled id={id}>
			<header>
				<ItemImgStyled
					src={image}
					alt={title}
					inlineSize='300px'
					blockSize='198px'
					borderRadius='29px'
					loading="lazy"
				/>
			</header>
			<h2>{title}</h2>
			<ItemDescription>{description}</ItemDescription>
			<ItemPeople>Para {people} personas</ItemPeople>
			<ItemPrice>${price}</ItemPrice>
			<footer>
				<ItemButtonStyled>
					<span>Agregar al Carrito</span>
					<img src={car} alt="image-cart" />
				</ItemButtonStyled>
			</footer>
		</ItemContainerStyled>
	);
};

export default Items;
