import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	decrement,
	increment,
	resetValue,
} from "../redux/slice/AppetizerData.slice";
import { addItems } from "../redux/slice/cart.slice";
import { ModalStyled } from "../styled-components";
import useModalFunctional from "./../hooks/useModalFunctional";
import Item from "./../model/item.model";
import {
	ArticleModal,
	ContainerModelStyled,
} from "./../styled-components/layout/layout.styled";
import HeroImage from "./HeroImage";
import star from "/icons/Star.svg";
import cart from "/icons/cart.svg";
import platoPasta from "/img/platoPasta2.png";
const Modal = () => {
	const amount = useSelector((state) => state.AppetizerData);
	const dispatch = useDispatch();
	const { idCategory, idFood } = useParams();
	const { itemFood } = useModalFunctional(idFood, idCategory);

	const handleAddItems = () => {
		const itemCart = new Item(
			itemFood.id,
			amount.value,
			itemFood.nameFood,
			itemFood.price,
			amount.value * itemFood.price,
			"",
			"",
		);

		dispatch(addItems(itemCart));
		dispatch(resetValue());
	};

	return (
		<ModalStyled>
			<ContainerModelStyled>
				<HeroImage
					img={platoPasta}
					alt='plato'
					blockSize='305px'
					inlineSize='383px'
				/>
				{itemFood !== undefined ? (
					<ArticleModal>
						<header>
							<h2>{itemFood.nameFood}</h2>
							<div>
								<img src={star} alt='start' />
								<p>4.9</p>
							</div>
						</header>
						<div>
							<strong>Descripción del Plato</strong>
							<p>{itemFood.description}</p>
							<p>{itemFood.delay.toUpperCase()}</p>
							<p>${itemFood.price}</p>
						</div>
						<footer>
							<span>{amount.value}</span>
							<div>
								<button onClick={() => dispatch(increment())}>+</button>
								<button onClick={() => dispatch(decrement())}>-</button>
							</div>
							<button onClick={handleAddItems}>
								<span>Agregar</span>
								<img src={cart} alt='cart' />
							</button>
						</footer>
					</ArticleModal>
				) : (
					<div>loading...</div>
				)}
			</ContainerModelStyled>
			<hr />
			<div>algo</div>
		</ModalStyled>
	);
};

export default Modal;
