import ItemsCard from "./ItemsCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardList = ({setOpen}) => {
	const card = useSelector((state) => state.card);

	return (
		<aside>
			<div>
				{card.map((item) => (
					<ItemsCard
						key={item.id}
						amount={item.amount}
						cost={item.cost}
						name={item.name}
						subTotal={item.subTotal}
					/>
				))}

				<footer>
					<Link to={"/checkout"} onClick={() => setOpen(false)}>
						Realizar pago
					</Link>
				</footer>
			</div>
		</aside>
	);
};

export default CardList;
