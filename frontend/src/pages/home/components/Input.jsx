import { InputStyled } from "../styled-components/layout.styled";
const Input = ({ type, name, onFocus, onBlur, value, onChange }) => {
	return (
		<InputStyled
			type={type}
			id='q'
			name={name}
			placeholder="Buscar"
			onFocus={onFocus}
			onBlur={onBlur}
			onChange={onChange}
			value={value}
		/>
	);
};

export default Input;
