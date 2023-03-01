import { useState } from "react";
import { InputStyled } from "../CheckoutStyled";
const Input = ({
	textLabel,
	type,
	name,
	placeholder,
	pattern,
	inlineSize,
	messageError,
	bottom,
}) => {
	const [error, setError] = useState();
	const handleChange = (event) => {
		let regex = new RegExp(pattern);
		const { value } = event.target;
		setError(!regex.test(value));
	};

	return (
		<InputStyled inlineSize={inlineSize} bottom={bottom}>
			<label htmlFor={name}>{textLabel}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				pattern={pattern}
				onChange={handleChange}
			/>
			{error && <span>{messageError}</span>}
		</InputStyled>
	);
};
export default Input;
