import { useDispatch } from "react-redux";
import {
	decrement,
	increment,
} from "../../../../redux/slice/AppetizerData.slice";
import { FooterArticleStyled } from "../styled-components/layout.styled";

import cart from "/icons/cart.svg";
const FooterArticle = ({ value, handleAddItems }) => {
	const dispatch = useDispatch();
	const handlerIncrement = () => dispatch(increment());
	const handlerDecrement = () => dispatch(decrement());

	return (
		<FooterArticleStyled>
			<span>{value}</span>
			<div>
				<button onClick={handlerIncrement}>+</button>
				<button onClick={handlerDecrement}>-</button>
			</div>
			<button onClick={handleAddItems}>
				<span>Agregar</span>
				<img src={cart} alt='cart' />
			</button>
		</FooterArticleStyled>
	);
};

export default FooterArticle;
