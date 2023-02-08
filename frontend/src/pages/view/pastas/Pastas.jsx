import { HeaderSubTitle, HeroImage, Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div } from "../../../styled-components";
import Details from "./components/Details";
import ItemFood from "./components/ItemFood";
import {
	ContainerDetailsStyled,
	PastasStyled,
} from "./styled-components/layout.styled";
import react from "/assets/react.svg";

const Pastas = () => {
	const { handleOpen, open, handleCloset } = useFunctionalityModal();

	return (
		<PastasStyled>
			<Modal open={open} handleCloset={handleCloset} />

			<HeaderSubTitle title="Pastas" textAlign='center' level={1} />

			<HeroImage img={react} alt='comida' blockSize="268px" inlineSize='100%' />

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

			<Div gap='46px'>
				<ItemFood onClick={handleOpen} />
				<ItemFood onClick={handleOpen} />
				<ItemFood onClick={handleOpen} />
				<ItemFood onClick={handleOpen} />
				<ItemFood onClick={handleOpen} />
				<ItemFood onClick={handleOpen} />
			</Div>
		</PastasStyled>
	);
};

export default Pastas;
