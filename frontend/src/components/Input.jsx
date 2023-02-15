import { InputContainer } from "../styled-components/Input.styled.";

function InputEmail({ error, name, type }) {
  
	return (
		<InputContainer error={error}>
			<label htmlFor="email">{name}</label>
			<input
				type={type}
				id="email"
				name='email'
			/>
			{error && <span>Email no valido</span>}
		</InputContainer>
	);
}

export default InputEmail;
