import { Items } from "../../../components";
import { CarruselStyled } from "../styled-components/layout.styled";
import item from "/assets/item1.jpg";

const Carrusel = ({ move }) => {
	return (
		<CarruselStyled translateX={`${move}%`}>
			<div>
				<Items
					title={"Tabla I"}
					image={item}
					description={
						"Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante."
					}
					people={"2"}
					price={2500}
				/>
				<Items
					title={"Tabla II"}
					image={item}
					description={
						"Salame, jamón crudo, queso gruyere, aceitunas mixtas, salsa especial."
					}
					people={"2"}
					price={2800}
				/>
				<Items
					title={"Tabla III"}
					image={item}
					description={
						"Salsa picante, salsa cheddar, salsa 4 quesos, choclo asado, mix de chorizos, porción de papas."
					}
					people={"3"}
					price={4800}
				/>
				<Items
					title={"Tabla I"}
					image={item}
					description={
						"Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante."
					}
					people={"2"}
					price={2500}
				/>
				<Items
					title={"Tabla II"}
					image={item}
					description={
						"Salame, jamón crudo, queso gruyere, aceitunas mixtas, salsa especial."
					}
					people={"2"}
					price={2800}
				/>
				<Items
					title={"Tabla III"}
					image={item}
					description={
						"Salsa picante, salsa cheddar, salsa 4 quesos, choclo asado, mix de chorizos, porción de papas."
					}
					people={"3"}
					price={4800}
				/>
			</div>
		</CarruselStyled>
	);
};

export default Carrusel;
