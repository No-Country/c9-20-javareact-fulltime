import { Link, Outlet, useParams } from "react-router-dom";
import { ItemFoodStyled } from "../styled-components/layout.styled";
import Star from "./Star";
import cart from "/icons/cart.svg";
import plato from "/img/platoPastaDemo.jpg";
const ItemFood = ({
	description,
	price,
	nameFood,
	image,
	portion,
	id,
	onClick,
	children,
}) => {
	const { namePath } = useParams();

	return (
		<>
			{!namePath ? (
				<ItemFoodStyled>
					<header>
						<img src={plato} alt="image" />
					</header>
					<Star />
					<h2>{nameFood}</h2>
					<b>{description}</b>
					<p>{portion} porciones</p>
					<strong>${price}</strong>

					<Link to={`${id}`}>
						<strong>Agregar al Carrito</strong>
						<img src={cart} alt="image-cart" />
					</Link>
				</ItemFoodStyled>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default ItemFood;
