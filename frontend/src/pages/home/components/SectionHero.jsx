import DivisionLine from "../../../components/DivisionLine";
import useDisplacement from "../hook/useDisplacement";
import {
	ButtonSearchStyled,
	FormStyled,
	SectionHeroStyled,
} from "../styled-components/layout.styled";
import Carrusel from "./Carrusel";
import ContainerButton from "./ContainerButton";
import Input from "./Input";
import imgHome from "/assets/fondoHome.png";
import search from "/icons/search.svg";

const SectionHero = ({
	handleActive,
	handleDesActive,
	onChange,
	textSearch,
}) => {
	const { move, handleMoveLeft, handleMoveRight } = useDisplacement();

	const handleOnSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<SectionHeroStyled img={imgHome} size='cover'>
			<FormStyled onSubmit={handleOnSubmit}>
				<Input
					name={"q"}
					type={"search"}
					onFocus={handleActive}
					/* onBlur={handleDesActive} */
					onChange={onChange}
					value={textSearch}
				/>
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
