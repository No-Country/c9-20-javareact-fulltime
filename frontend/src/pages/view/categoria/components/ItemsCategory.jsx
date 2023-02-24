import { Outlet, useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import { SectionStyledBackground } from "../../../../styled-components";
import useListFood from "../hook/useListFood";
import { DivGrid } from "../styled-components/layout.styled";
import RenderingFood from "./RenderingFood";
import platoPizza from "/img/fondoPastas.jpg";

const ItemsCategory = () => {
	const { idCategory, idFood } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	return (
		<>
			<SectionStyledBackground img={platoPizza} size='cover'>
				<HeaderSubTitle title={` ${idCategory}`} textAlign='center' level={2} />
				{!idFood ? (
					<DivGrid>
						<RenderingFood isLoading={isLoading} list={list} />
					</DivGrid>
				) : (
					<Outlet />
				)}
			</SectionStyledBackground>
		</>
	);
};

export default ItemsCategory;
