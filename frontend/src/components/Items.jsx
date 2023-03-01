import { Link } from "react-router-dom";
import {
	ItemContainerStyled,
	ItemDescription,
	ItemFooterStyled,
	ItemImgStyled,
	ItemPeople,
	ItemPrice,
} from "./../styled-components/layout/layout.styled";
import car from "/icons/cart.svg";

const Items = ({ title, image, description, people, price, id, category }) => {
	return (
		<ItemContainerStyled key={id}>
			<ItemImgStyled
				src={image}
				alt={title}
				inlineSize='300px'
				blockSize='198px'
				borderRadius='29px'
				loading="lazy"
			/>
			<h2>{title}</h2>
			<ItemDescription>{description}</ItemDescription>
			<ItemPeople>Para {people} personas</ItemPeople>
			<ItemPrice>${price}</ItemPrice>
			<ItemFooterStyled>
				<Link to={`/categoria/${category}/${id}`}>
					<span>Agregar al Carrito</span>
					<img src={car} alt="image-cart" />
				</Link>
			</ItemFooterStyled>
		</ItemContainerStyled>
	);
};

export default Items;
