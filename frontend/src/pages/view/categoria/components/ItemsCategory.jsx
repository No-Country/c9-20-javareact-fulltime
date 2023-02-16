import { Outlet, useParams, useResolvedPath } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import { Div, BadgeStar } from "../../../../styled-components";
import useListFood from "../hook/useListFood";
import ItemFood from "./ItemFood";
import plato from "../../../../../public/assets/plato-pasta.png";
import star from "../../../../../public/icons/Star.svg";


const ItemsCategory = () => {
	const { pathname } = useResolvedPath();
	const { idCategory, idFood } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	return (
		<>
			<section>
				<HeaderSubTitle
					title={` Conoce nuestra carta mejores ${idCategory}`}
					textAlign='center'
					level={2}
				/>
				</section>
				{pathname == `/categoria/${idCategory}` ? (
					<Div gap={"80px"} ancho={"300px"} style={{padding: "0 4em"}}>
						{isLoading ? (
							list && list.map((item) => (
								<ItemFood
								key={item.id}
								id={item.id}
								nameFood={item.nameFood}
								image={plato}
								circle={"true"}
								description={item.description}
								portion={"1"}
								price={item.price}>
								<BadgeStar>
									<img src={star} alt="star svg image" />
									4.9
								</BadgeStar>
							</ItemFood>
							))
						) : (
							<div>loading...</div>
						)}
					</Div>
			) : (
			<Outlet />
			)}
		</>
	);
};

export default ItemsCategory;
