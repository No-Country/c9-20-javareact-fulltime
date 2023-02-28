import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTheTotal, closetCart } from "../redux/slice/cart.slice";
import { ButtonCarListExitStyled, CarListStyled } from "../styled-components";
import ItemsCard from "./ItemsCard";
import cartYellow from "/icons/cartYellow.svg";
import exit from "/icons/exit.svg";
const CardList = () => {
	const cart = useSelector((state) => state.cart.items);
	const open = useSelector((state) => state.cart.open);
	const total = useSelector((state) => state.cart.total);

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		dispatch(calculateTheTotal());
		if (cart.length !== 0) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [cart]);

	return (
		<CarListStyled
			translateX={open ? "translateX(0%)" : "translateX(100%)"}
			length={cart.length}
		>
			<ButtonCarListExitStyled
				onClick={() => dispatch(closetCart())}
				img={exit}
				size='cover'
			/>
			<header>
				<h2>Mi pedido</h2>
				<button />
				<img src={cartYellow} alt='cart' />
			</header>

			<section>
				{isLoading ? (
					cart.map((item) => (
						<ItemsCard
							key={item.id}
							id={item.id}
							amount={item.amount}
							name={item.name}
							cost={item.cost}
						/>
					))
				) : (
					<div>Sin productos</div>
				)}
			</section>

			<footer>
				<div>
					<b>SubTotal</b>
					<p>${total}</p>
				</div>
				<div>
					<Link to={"/checkout"}>Realizar pago</Link>
					<Link to={"/categoria"}>Seguir comprando</Link>
				</div>
			</footer>
		</CarListStyled>
	);
};

export default CardList;
