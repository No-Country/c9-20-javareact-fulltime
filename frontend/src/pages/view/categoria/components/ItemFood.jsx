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
						<Star />
					</header>
					<h2>{nameFood}</h2>
					<p>{description}</p>
					<p>{portion} porciones</p>
					<p>${price}</p>

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
