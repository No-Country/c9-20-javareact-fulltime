import { Outlet, useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../components";
import { Div } from "../../../styled-components";
import ItemFood from "./components/ItemFood";
import useListFood from "./hook/useListFood";

const Category = () => {
	const { idCategory, idFood } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	return (
		<>
			{!idFood ? (
				<section>
					<HeaderSubTitle
						title={` Conoce nuestra carta mejores ${idCategory}`}
						textAlign='center'
						level={2}
					/>
					<Div gap='46px'>
						{isLoading ? (
							list.map((item) => (
								<ItemFood
									description={item.description}
									id={item.id}
									name={item.nameFood}
									nameFood={idCategory}
									price={item.price}
									key={item.id}
								/>
							))
						) : (
							<div>loading...</div>
						)}
					</Div>
				</section>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default Category;
