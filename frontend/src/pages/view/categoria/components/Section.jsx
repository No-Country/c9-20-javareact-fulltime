import { HeaderSubTitle } from "../../../../components";
import { useGetInfoFoodQuery } from "../../../../redux/query/FoodInfo.query";
import { Div } from "../../../../styled-components";
import Card from "./card";

const Section = ({ idCategory }) => {
	const { data: food } = useGetInfoFoodQuery();
	return (
		<section>
			<HeaderSubTitle
				title=' Conoce nuestra Carta'
				textAlign='center'
				level={1}
				fontWeight={300}
			/>
			<Div gap={"109px"} inlineSize='100%' blockSize='735px'>
				{!idCategory && food ? (
					food.map((item) => (
						<Card
							key={item.id}
							img={item.image}
							link={item.name}
							name={item.name}
						/>
					))
				) : (
					<div>loading...</div>
				)}
			</Div>
		</section>
	);
};

export default Section;
