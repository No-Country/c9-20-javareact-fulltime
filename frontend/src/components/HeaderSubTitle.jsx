import { HeaderSubtitleStyled } from "../styled-components";
// TODO reusable caption component

const HeaderSubTitle = ({ title, textAlign, level }) => {
	const Title = `h${level || 1}`;

	return (
		<HeaderSubtitleStyled textAlign={textAlign}>
			<Title>{title}</Title>
		</HeaderSubtitleStyled>
	);
};

export default HeaderSubTitle;
