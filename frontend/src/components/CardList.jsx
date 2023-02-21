import ItemsCard from "./ItemsCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CardList = () => {
	const card = useSelector((state) => state.card);
	return (
		<aside>
			{card.map((item) => (
				<ItemsCard
					amount={item.amount}
					cost={item.cost}
					name={item.name}
					subTotal={item.subTotal}
				/>
			))}

			<footer>
				<Link to={"/checkout"}>Realizar pago</Link>
			</footer>
		</aside>
	);
};

export default CardList;
