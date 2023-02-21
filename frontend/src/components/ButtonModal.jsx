import { ButtonModalStyled } from "../styled-components";

const ButtonModal = ({ onClick, img, padding, size }) => {
	return (
		<ButtonModalStyled
			onClick={onClick}
			img={img}
			padding={padding}
			size={size}
		/>
	);
};

export default ButtonModal;
