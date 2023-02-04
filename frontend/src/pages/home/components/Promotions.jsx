import { ContainerFlexBoxStyled, SectionStyled } from "../styled-components";
import HeaderSubTitle from "./HeaderSubTitle";

const Promotions = () => {
	return (
		<SectionStyled>
			<HeaderSubTitle title='Conoce nuestra Carta' textAlign='center' />
			<ContainerFlexBoxStyled gap='12px' blockSize='400px' inlineSize='100%'>
				<article>items</article>
			</ContainerFlexBoxStyled>
		</SectionStyled>
	);
};

export default Promotions;
