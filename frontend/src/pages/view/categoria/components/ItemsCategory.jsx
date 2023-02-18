import { useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import useListFood from "../hook/useListFood";
import { ItemsCategoryStyled } from "../styled-components/layout.styled";
import RenderingFood from "./RenderingFood";
import platoPizza from "/img/fondoPastas.jpg";
const ItemsCategory = () => {
	const { idCategory, idFood } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	return (
		<>
			<ItemsCategoryStyled img={platoPizza} size='cover'>
				<HeaderSubTitle title={` ${idCategory}`} textAlign='center' level={2} />
				{!idFood ? (
					<RenderingFood isLoading={isLoading} list={list} />
				) : (
					<div>loading...</div>
				)}
			</ItemsCategoryStyled>
		</>
	);
};

export default ItemsCategory;
