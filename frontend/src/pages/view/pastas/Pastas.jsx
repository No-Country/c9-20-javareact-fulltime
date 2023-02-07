import HeaderSubTitle from "./../../../components/HeaderSubTitle";
import Details from "./components/Details";
import HeroImage from "./components/HeroImage";
import ItemFood from "./components/ItemFood";
import {
	ContainerDetailsStyled,
	PastasStyled,
} from "./styled-components/layout.styled";
import react from "/assets/react.svg";
const Pastas = () => {
	return (
		<PastasStyled>
			<HeaderSubTitle title="Pastas" textAlign='center' level={1} />

			<HeroImage img={react} alt='comida' blockSize={"240px"} />

			<span>15 A 20 Min de demora</span>

			<ContainerDetailsStyled>
				<Details
					titleSummary='Programar pedido'
					list={["nose xd", "nose xd", "nose xd"]}
				/>
				<Details
					titleSummary='Retirar en el local'
					list={["nose xd", "nose xd", "nose xd"]}
				/>
			</ContainerDetailsStyled>

			<div>
				<ItemFood />
			</div>
		</PastasStyled>
	);
};

export default Pastas;
