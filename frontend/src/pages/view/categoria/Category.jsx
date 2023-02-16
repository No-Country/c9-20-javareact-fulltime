import { Outlet,useLocation, useParams } from "react-router-dom";
import { CardList, HeaderSubTitle } from "../../../components";
import { Div } from "../../../styled-components";
import ItemFood from "./components/ItemFood";
import useListFood from "./hook/useListFood";
const Category = () => {
	const { namePath, idCategory, idFood } = useParams();
	let location = useLocation()
	const { list, isLoading } = useListFood(idCategory);
	console.log(location)

	return (
		<>
			<CardList />
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
									) : (<>
										<div>loading...</div>
										<p>{idCategory}</p></>
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
