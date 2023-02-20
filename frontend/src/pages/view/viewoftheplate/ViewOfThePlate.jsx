import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HeroImage } from "../../../components";
import Item from "../../../model/item.model";
import { resetValue } from "../../../redux/slice/AppetizerData.slice";
import { addItems } from "../../../redux/slice/cart.slice";
import Container from "./components/Container";
import Description from "./components/Description";
import FooterArticle from "./components/FooterArticle";
import Form from "./components/Form";
import HeaderArticle from "./components/HeaderArticle";
import SectionClients from "./components/SectionClients";
import useItemFood from "./hook/useItemFood";
import {
	ArticleStyled,
	ViewOfThePlateStyled,
} from "./styled-components/layout.styled";
import platoPasta from "/img/platoPasta2.png";
const ViewOfThePlate = () => {
	const amount = useSelector((state) => state.AppetizerData);
	const dispatch = useDispatch();
	const { idCategory, idFood } = useParams();
	const { itemFood } = useItemFood(idFood, idCategory);
	console.log(itemFood);
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
						<HeaderArticle nameFood={itemFood.nameFood} qualification={"4.9"} />

						<Description
							description={itemFood.description}
							price={itemFood.price}
							delay={itemFood.delay}
						/>
						<FooterArticle
							handleAddItems={handleAddItems}
							value={amount.value}
						/>
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
					<Form />
					<SectionClients />
				</Container>
			</Container>
		</ViewOfThePlateStyled>
	);
};

export default ViewOfThePlate;
