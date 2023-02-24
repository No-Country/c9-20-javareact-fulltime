import { useEffect, useState } from "react";
import { Items } from "../../../components";
import { useGetDishesQuery } from "../../../redux/query/FoodInfo.query";
import { CarruselStyled } from "../styled-components/layout.styled";

const Carrusel = ({ move }) => {
	const [list, setList] = useState([]);

	const { data: di, isSuccess } = useGetDishesQuery();

	useEffect(() => {
		if (isSuccess) {
			const { dishes } = di._embedded;

			const template = dishes.filter((item) => {
				if (
					item.name === "Combo libra" ||
					item.name === "Tabla I" ||
					item.name === "Tabla II" ||
					item.name === "Tabla III"
				) {
					return item;
				}
			});

			setList([...template]);
		}
	}, [isSuccess]);

	return (
		<CarruselStyled translateX={`${move}%`}>
			<div>
				{isSuccess ? (
					list.map((item) => (
						<Items
							id={item.id}
							title={item.name}
							image={item.image.url}
							description={item.description}
							price={item.price}
						/>
					))
				) : (
					<div>loading...</div>
				)}
			</div>
		</CarruselStyled>
	);
};

export default Carrusel;
