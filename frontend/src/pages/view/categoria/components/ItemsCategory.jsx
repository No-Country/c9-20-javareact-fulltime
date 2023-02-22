import { Outlet, useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import { Div, SectionStyledBackground } from "../../../../styled-components";
import useListFood from "../hook/useListFood";
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
					<Div blockSize='100vh' inlineSize='100%' gap='120px' padding='7em 0'>
						<RenderingFood isLoading={isLoading} list={list} />
					</Div>
				) : (
					<Outlet />
				)}
			</SectionStyledBackground>
		</>
	);
};

export default ItemsCategory;
