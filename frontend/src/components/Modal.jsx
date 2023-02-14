import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	resetValue,
} from "../redux/slice/AppetizerData.slice";
import { addItems } from "../redux/slice/card.slice";
import { ModalStyled } from "../styled-components";
import ButtonModal from "./ButtonModal";
import HeroImage from "./HeroImage";
import exit from "/icons/exit.svg";

const Modal = ({ open, handleCloset }) => {
	const item = useSelector((state) => state.AppetizerData);
	const dispatch = useDispatch();
	const handleReset = () => {
		dispatch(
			addItems({
				...item,
				cost: item.amount * item.subTotal,
			}),
		);
		dispatch(resetValue());

		handleCloset();
	};

	return (
		<ModalStyled visibility={open ? "visible" : "hidden"}>
			<div>
				<ButtonModal
					onClick={handleCloset}
					img={exit}
					size={"cover"}
					padding='8px'
				/>
				<HeroImage img={""} alt='img' blockSize='305px' inlineSize='383px' />
				<div>
					<div>
						<h2>Ñoquis</h2>
						<p>Breve descripción</p>
					</div>

					<div>
						<button onClick={() => dispatch(increment())}>+</button>
						<span>{item.amount}</span>
						<button onClick={() => dispatch(decrement())}>-</button>
					</div>
					<div>
						<button onClick={handleReset}>Agregar</button>
					</div>
				</div>
			</div>
		</ModalStyled>
	);
};

export default Modal;
