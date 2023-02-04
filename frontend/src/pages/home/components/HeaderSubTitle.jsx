// TODO reusable caption component
import { HeaderSubtitleStyled } from "../styled-components";
const HeaderSubTitle = ({ title, textAlign }) => {
	return (
		<HeaderSubtitleStyled textAlign={textAlign}>
			<h2>{title}</h2>
		</HeaderSubtitleStyled>
	);
};

export default HeaderSubTitle;
