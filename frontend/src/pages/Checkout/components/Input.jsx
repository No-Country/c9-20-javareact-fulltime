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
	register,
	error,
}) => {
	/* 	const handleChange = (event) => {
		let regex = new RegExp(pattern);
		const { value } = event.target;
		setError(!regex.test(value));
	};
 */
	console.log(error);
	return (
		<InputStyled inlineSize={inlineSize} bottom={bottom}>
			<label htmlFor={name}>{textLabel}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				pattern={pattern}
				onChange={handleChange}
				{...register}
			/>

			{error && <span>{error?.message}</span>}
		</InputStyled>
	);
};
export default Input;
