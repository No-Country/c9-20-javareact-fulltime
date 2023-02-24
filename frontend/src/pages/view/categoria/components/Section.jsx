import { HeaderSubTitle } from "../../../../components";
import { Div } from "../../../../styled-components";
import Card from "../components/Card";
import useCategories from "../hook/useCategories";


const Section = ({ idCategory }) => {
	const { categories, isLoading } = useCategories();

	return (
		<section>
			<HeaderSubTitle
				title=' Conoce nuestra Carta'
				textAlign='center'
				level={1}
				fontWeight={300}
			/>

			<Div gap={"109px"} inlineSize='100%' blockSize='735px'>
				{!isLoading ? (
					categories.map((item) => (
						<Card
							key={item.id}
							img={item.imgUrl}
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
