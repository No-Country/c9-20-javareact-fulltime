import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/slice/cart.slice";
const ItemsCard = ({ amount, name, cost, id }) => {
	const dispatch = useDispatch();

	return (
		<article>
			<span>
				{amount}X{name}
			</span>
			<div>
				<b>${cost}</b>
				<button onClick={() => dispatch(deleteItem(id))}>Borrar</button>
			</div>
		</article>
	);
};

export default ItemsCard;
