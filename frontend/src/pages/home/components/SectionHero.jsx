import useDisplacement from "../hook/useDisplacement";
import {
	ButtonSearchStyled,
	FormStyled,
	SectionHeroStyled,
} from "../styled-components";
import Carrusel from "./Carrusel";
import ContainerButton from "./ContainerButton";
import DivisionLine from "./DivisionLine";
import Input from "./Input";
import imgHome from "/assets/fondoHome.png";
import search from "/icons/search.svg";
const SectionHero = () => {
	const { move, handleMoveLeft, handleMoveRight } = useDisplacement();
	return (
		<SectionHeroStyled img={imgHome} size='cover'>
			<FormStyled>
				<Input name={"text"} type={"text"} />
				<ButtonSearchStyled img={search} size='cover' />
			</FormStyled>

			<h1>DESTACADOS DE ESTA SEMANA</h1>

			<DivisionLine title={"Tablas para compartir"} />
			<Carrusel move={move} />
			<ContainerButton
				handleMoveRight={handleMoveRight}
				handleMoveLeft={handleMoveLeft}
			/>
		</SectionHeroStyled>
	);
};

export default SectionHero;
