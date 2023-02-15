import { useEffect, useState } from "react";
import { Footer } from "../../../components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import { Div } from "../../../styled-components";
import { CategoriesContainer } from "../styled-components";
import Card from "./Card";

const Categorias = () => {
	const [categorias, setCategorias] = useState();

	useEffect(() => {
		fetch("../../../../api/fooView.json")
			.then((res) => res.json())
			.then((json) => {
				const cat = json.food.map((cat) => cat.name);
				setCategorias(cat);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<CategoriesContainer>
			<HeaderSubTitle
				title=' Conoce nuestra Carta'
				textAlign='center'
				level={2}
			/>
			<Div gap={"50px"} ancho={"300px"}>
				{!categorias ? (
					<span>Loading...</span>
				) : (
					categorias.map((cat, i) => {
						return <Card key={i} name={cat} link={cat} />;
					})
				)}
			</Div>

			<Footer />
		</CategoriesContainer>
	);
};

export default Categorias;