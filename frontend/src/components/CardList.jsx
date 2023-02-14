import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closetCart } from "../redux/slice/cart.slice";
import { CarListStyled } from "../styled-components";
import ItemsCard from "./ItemsCard";

const CardList = () => {
	const cart = useSelector((state) => state.cart.items);
	const open = useSelector((state) => state.cart.open);

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (cart.length !== 0) {
			setIsLoading(true);
			cart.forEach((i) => {
				setTotal(total + i.subTotal);
			});
		} else {
			setIsLoading(false);
		}
	}, [cart]);

	return (
		<CarListStyled translateX={open ? "translateX(0%)" : "translateX(100%)"}>
			<button onClick={() => dispatch(closetCart())}>X</button>
			<header>
				<h2>Mi pedido</h2>
				<div>icon</div>
			</header>

			<section>
				{isLoading ? (
					cart.map((item) => (
						<ItemsCard
							key={item.id}
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
					<p>SubTotal</p>
					<b>${total}</b>
				</div>
				<Link to={"/checkout"}>Realizar pago</Link>
				<a href=''>Seguir comprando</a>
			</footer>
		</CarListStyled>
	);
};

export default CardList;
