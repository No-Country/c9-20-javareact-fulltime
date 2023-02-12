import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	resetValue,
} from "../redux/slice/AppetizerData.slice";
import { addItems } from "../redux/slice/cart.slice";
import { ModalStyled } from "../styled-components";
import ButtonModal from "./ButtonModal";
import HeroImage from "./HeroImage";
import react from "/assets/react.svg";
import exit from "/icons/exit.svg";

const Modal = ({ open, item }) => {
	const amount = useSelector((state) => state.AppetizerData);
	const dispatch = useDispatch();

	const handleAddItems = () => {
		dispatch(
			addItems({
				id: item.id,
				amount: amount.value,
				name: item.nameFood,
				cost: item.price,
				subTotal: amount * item.price,
				ShippingCost: "",
				DiscountCode: "",
			}),
		);
		dispatch(resetValue());
	};

	return (
		<ModalStyled visibility={open ? "visible" : "hidden"}>
			<div>
				{/* //TODO Borrar */}
				<ButtonModal
					onClick={() => {}}
					img={exit}
					size={"cover"}
					padding='8px'
				/>
				{item !== undefined ? (
					<div>
						<div>
							<h2>{item.nameFood}</h2>
							<p>{item.description}</p>
							<p>demora de {item.delay}</p>
							<p>Precio: {item.price}</p>
						</div>

						<div>
							<button onClick={() => dispatch(increment())}>+</button>
							<span>{amount.value}</span>
							<button onClick={() => dispatch(decrement())}>-</button>
						</div>
						<div>
							<button onClick={handleAddItems}>Agregar</button>
						</div>
					</div>
				) : (
					<div>loading...</div>
				)}
				<HeroImage img={react} alt='img' blockSize='305px' inlineSize='383px' />
			</div>
		</ModalStyled>
	);
};

export default Modal;
