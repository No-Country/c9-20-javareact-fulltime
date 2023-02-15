import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import { item90, item91, item92 } from "../../../../public/assets";
import DivisionLine from "../../../components/DivisionLine";
import { useResolvedPath } from "react-router-dom";
import { useGetInfoFoodQuery } from "../../../redux/query/FoodInfo.query";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import Card from "./Card";

const ItemListContainer = () => {
	const { data: food, isSuccess } = useGetInfoFoodQuery();
	const { namePath } = useResolvedPath();

	return (
		<>
		<SectionStyled>

			<HeaderSubTitle
				title='DESCATADOS DE ESTA SEMANA'
				textAlign='center'
				level={2}
			/>
			
			<DivisionLine title={"Tablas para compartir"} />

			<Div gap={"50px"} ancho={"335px"} style={{transform: "translateY(4em)"}}>
				<Items
					title={"Tabla I"} 
					image={item90} 
					description={"Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante."}
					people={"2"}
					price={2500} />
				<Items
					title={"Tabla II"} 
					image={item91} 
					description={"Salame, jamón crudo, queso gruyere, aceitunas mixtas, salsa especial."}
					people={"2"}
					price={2800} />
				<Items
					title={"Tabla III"} 
					image={item92} 
					description={"Salsa picante, salsa cheddar, salsa 4 quesos, choclo asado, mix de chorizos, porción de papas."}
					people={"3"}
					price={4800} />
			</Div>
		</SectionStyled>
		</>
	);
};

export default ItemListContainer;
