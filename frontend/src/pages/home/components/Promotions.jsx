import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";

const Promotions = () => {
	const { open, handleCloset, handleOpen } = useFunctionalityModal();

	return (
		<SectionStyled>
			<HeaderSubTitle
				title='Conoce nuestras promociones del día'
				textAlign='center'
				level={2}
			/>
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
