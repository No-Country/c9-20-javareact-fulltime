import { HeroImageStyled } from "../styled-components";
const HeroImage = ({ img, alt, blockSize, inlineSize }) => {
	return (
		<HeroImageStyled blockSize={blockSize} inlineSize={inlineSize}>
			<img src={img} alt={alt} />
		</HeroImageStyled>
	);
};

export default HeroImage;
