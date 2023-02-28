import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import { SectionStyledBackground } from "../../../../styled-components";
import useListFood from "../hook/useListFood";
import { DivGrid } from "../styled-components/layout.styled";
import RenderingFood from "./RenderingFood";
import fondoPastas from "/img/fondopastas.png";
import fondoCafeteria from "/img/fondoCafe.png";
import fondoChurrasqueria from "/img/fondoCarnes.png";
import fondoPizza from "/img/fondoPizza.png";
import fondoPostres from "/img/fondoPostres.png";
import fondoSalusables from "/img/fondoSaludables.png";

const ItemsCategory = () => {
	const { idCategory, idFood } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	const [backgroundImage, setBackgroundImage] = useState(null);

	useEffect(() => {
		// Cargar imagen de fondo para la categoría actual
		if (idCategory === "Pastas") {
			setBackgroundImage(fondoPastas);
		} 
		else if(idCategory === "Cafeteria"){
			setBackgroundImage(fondoCafeteria);
		}
		else if(idCategory === "Churrasqueria"){
			setBackgroundImage(fondoChurrasqueria);
		}
		else if(idCategory === "Pizzas"){
			setBackgroundImage(fondoPizza);
		}
		else if(idCategory === "Postres"){
			setBackgroundImage(fondoPostres);
		}
		else if(idCategory === "Saludables"){
			setBackgroundImage(fondoSalusables);
		}
		else {
			setBackgroundImage(null);
		}
	}, [idCategory]);
console.log(idCategory);
	return (
		<>
			{backgroundImage && (
				<SectionStyledBackground img={backgroundImage} size="cover">
					<HeaderSubTitle
						title={` ${idCategory}`}
						textAlign="center"
						level={2}
					/>
					{!idFood ? (
						<DivGrid>
							<RenderingFood isLoading={isLoading} list={list} />
						</DivGrid>
					) : (
						<Outlet />
					)}
				</SectionStyledBackground>
			)}
		</>
	);
};

export default ItemsCategory;
