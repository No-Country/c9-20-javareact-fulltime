import React from "react";
import { ButtonActionStyled } from "../styled-components";
const ButtonAction = ({
	onClick,
	size,
	img,
	padding,
	color,
	backgroundColor,
	transition,
	backgroundColorHover,
}) => {
	return (
		<ButtonActionStyled
			size={size}
			img={img}
			onClick={onClick}
			padding={padding}
			color={color}
			backgroundColor={backgroundColor}
			transition={transition}
			backgroundColorHover={backgroundColorHover}
		/>
	);
};

export default ButtonAction;
