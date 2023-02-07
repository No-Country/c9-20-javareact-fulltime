import { HeroImageStyled } from "../styled-components/layout.styled";
const HeroImage = ({ img, alt, blockSize, inlineSize }) => {
	return (
		<HeroImageStyled blockSize={blockSize} inlineSize={inlineSize}>
			<img src={img} alt={alt} />
		</HeroImageStyled>
	);
};

export default HeroImage;
