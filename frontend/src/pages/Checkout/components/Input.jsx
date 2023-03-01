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
	handleChange,
}) => {
	const [error, setError] = useState(false);
	/* 	const handleChange = (event) => {
		let regex = new RegExp(pattern);
		const { value } = event.target;
		setError(!regex.test(value));
	};
 */
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
