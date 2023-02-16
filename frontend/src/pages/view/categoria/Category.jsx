import { Outlet, useParams } from "react-router-dom";
import { CardList, HeaderSubTitle } from "../../../components";
import { useGetInfoFoodQuery } from "../../../redux/query/FoodInfo.query";
import { Div } from "../../../styled-components";
import { HomeContainer } from "../../home/styled-components/HomeComponents";
import Card from "./../../home/components/Card";
const Category = () => {
	const { data: food } = useGetInfoFoodQuery();
	const { idCategory } = useParams();

	return (
		<HomeContainer>
			<CardList />
			{!idCategory ? (
				<>
					<HeaderSubTitle
						title=' Conoce nuestra Carta'
						textAlign='center'
						level={2}
					/>
					<Div gap={"50px"} ancho={"300px"}>
						{!idCategory ? (
							food.map((item) => (
								<Card id={item.id} link={item.name} name={item.name} />
							))
						) : (
							<div>loading...</div>
						)}
					</Div>
				</>
			) : (
				<Outlet />
			)}
		</HomeContainer>
	);
};

export default Category;
