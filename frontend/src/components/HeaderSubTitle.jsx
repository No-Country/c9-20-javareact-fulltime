// TODO reusable caption component
import { HeaderSubtitleStyled } from "../styled-components";

const HeaderSubTitle = ({ title, textAlign, level }) => {
	const Title = `h${level}`;

	return (
		<HeaderSubtitleStyled textAlign={textAlign}>
			<Title>{title}</Title>
		</HeaderSubtitleStyled>
	);
};

export default HeaderSubTitle;
