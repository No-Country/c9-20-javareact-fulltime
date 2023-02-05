import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "./HeaderSubTitle";
import ItemListContainer from "./ItemListContainer";

const Promotions = () => {
	return (
		<SectionStyled>
			<HeaderSubTitle title='Conoce nuestra Carta' textAlign='center' />
			<ItemListContainer />
		</SectionStyled>
	);
};

export default Promotions;
