import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import DivisionLine from "../../../components/DivisionLine";

const Promotions = () => {
	const { open, handleCloset, handleOpen } = useFunctionalityModal();

	return (
		<SectionStyled>
			<HeaderSubTitle
				title='PROMO ESPECIAL DE FIN DE SEMANA'
				textAlign='center'
				level={2}
			/>

			<DivisionLine title={"Platos con descuentos"} />

			<Modal open={open} handleCloset={handleCloset} />

			<Div>
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
			</Div>
		</SectionStyled>
	);
};

export default Promotions;
