import { Link, Outlet, useParams } from "react-router-dom";
import Star from "../pages/view/categoria/components/Star";
import { ItemFoodStyled } from "../pages/view/categoria/styled-components/layout.styled";
import cart from "/icons/cart.svg";
const ItemFood = ({ description, price, nameFood, portion, id, img }) => {
	const { namePath } = useParams();

	return (
		<>
			{!namePath ? (
				<ItemFoodStyled>
					<header>
						<img src={img} alt="image" />
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
