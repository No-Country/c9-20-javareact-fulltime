import { Link } from "react-router-dom";
import {
	ItemContainerStyled,
	ItemDescription,
	ItemPeople,
	ItemPrice,
} from "./../../../styled-components/layout/layout.styled";
import car from "/icons/cart.svg";

const Items = ({
	title,
	image,
	description,
	people,
	price,
	onClick,
	children,
	id,
}) => {
	return (
		<ItemContainerStyled key={id}>
			<section>
				<div>
					<img src={image} alt="image" />
					{children}
				</div>
				<h2>{title}</h2>
				<ItemDescription>{description}</ItemDescription>
				<ItemPeople>Para {people} personas</ItemPeople>
				<ItemPrice>${price}</ItemPrice>
				<Link to={`${id}`}>
					<span>Agregar al Carrito</span>
					<img src={car} alt="image-cart" />
				</Link>
			</section>
		</ItemContainerStyled>
	);
};

export default Items;
