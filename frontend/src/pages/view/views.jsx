import { useResolvedPath } from "react-router-dom";
import { HeaderSubTitle, HeroImage, Modal } from "../../components";
import useModalFunctional from "../../hooks/useModalFunctional";
import { Div } from "../../styled-components";
import ItemFood from "./components/ItemFood";
import useListFood from "./hook/useListFood";
import { ViewStyled } from "./styled-components/layout.styled";
import react from "/assets/react.svg";

const View = ({ img }) => {
	const { pathname } = useResolvedPath();
	const nameFood = pathname.substring(1);
	const { list, isLoading } = useListFood(nameFood);

	const { open, handleOpenModal, itemFood } = useModalFunctional();

	return (
		<ViewStyled>
			<Modal open={open} item={itemFood} />

			<HeaderSubTitle title={nameFood} textAlign='center' level={1} />

			<HeroImage img={react} alt='comida' blockSize="268px" inlineSize='100%' />

			<Div gap='46px'>
				{isLoading ? (
					list.map((item) => (
						<ItemFood
							key={item.id}
							descripción={item.description}
							name={item.nameFood}
							price={item.price}
							onClick={() => handleOpenModal(nameFood, item.id)}
						/>
					))
				) : (
					<div>loading...</div>
				)}
			</Div>
		</ViewStyled>
	);
};

export default View;
