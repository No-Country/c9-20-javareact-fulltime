import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HeroImage } from "../../../components";
import Item from "../../../model/item.model";
import {
	decrement,
	increment,
	resetValue,
} from "../../../redux/slice/AppetizerData.slice";
import { addItems } from "../../../redux/slice/cart.slice";
import Container from "./components/Container";
import ContainerStart from "./components/ContainerStart";
import Form from "./components/Form";
import useItemFood from "./hook/useItemFood";
import {
	ArticleStyled,
	ViewOfThePlateStyled,
} from "./styled-components/layout.styled";
import start from "/icons/Star.svg";
import cart from "/icons/cart.svg";
import platoPasta from "/img/platoPasta2.png";
const ViewOfThePlate = () => {
	const amount = useSelector((state) => state.AppetizerData);
	const dispatch = useDispatch();
	const { idCategory, idFood } = useParams();
	const { itemFood } = useItemFood(idFood, idCategory);

	const handleAddItems = () => {
		if (amount.value !== 0) {
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
		}
		dispatch(resetValue());
	};

	return (
		<ViewOfThePlateStyled>
			<Container>
				<HeroImage
					img={platoPasta}
					alt='plato'
					blockSize='305px'
					inlineSize='383px'
				/>
				{itemFood !== undefined ? (
					<ArticleStyled>
						<header>
							<h2>{itemFood.nameFood}</h2>
							<div>
								<img src={start} alt='start' />
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
					</ArticleStyled>
				) : (
					<div>loading...</div>
				)}
			</Container>
			<hr />
			<Container
				flexDirection='column'
				padding='0em 6em'
				alignItems='flex-start'
			>
				<Container flexDirection='column' alignItems='flex-start'>
					<ContainerStart />
					<Form />
				</Container>
			</Container>
		</ViewOfThePlateStyled>
	);
};

export default ViewOfThePlate;
