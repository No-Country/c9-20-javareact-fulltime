import Items from "../../../components/Items";
import { Div } from "../../../styled-components";
import {
	ButtonSearchStyled,
	FormStyled,
	SectionHeroStyled,
} from "../styled-components";
import DivisionLine from "./DivisionLine";
import Input from "./Input";
import imgHome from "/assets/fondoHome.png";
import item from "/assets/item1.jpg";
import search from "/icons/search.svg";
const SectionHero = () => {
	return (
		<SectionHeroStyled img={imgHome} size='cover'>
			<FormStyled>
				<Input name={"text"} type={"text"} />
				<ButtonSearchStyled img={search} size='cover' />
			</FormStyled>

			<h1>DESTACADOS DE ESTA SEMANA</h1>

			<DivisionLine title={"Tablas para compartir"} />

			<Div
				gap={"50px"}
				ancho={"335px"}
				style={{ transform: "translateY(4em)" }}
			>
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
			</Div>
		</SectionHeroStyled>
	);
};

export default SectionHero;
