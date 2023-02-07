import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "./../../../components/HeaderSubTitle";
import ItemListContainer from "./ItemListContainer";

const Promotions = () => {
	return (
		<SectionStyled>
			<HeaderSubTitle
				title=' Conoce nuestra Carta'
				textAlign='center'
				level={"2"}
			/>
			<ItemListContainer />
		</SectionStyled>
	);
};

export default Promotions;
