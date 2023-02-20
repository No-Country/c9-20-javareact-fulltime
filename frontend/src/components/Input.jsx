import { useState } from "react";
import { InputContainer } from "../styled-components/Input.styled.";

function InputEmail({ name, type, data, setData }) {
  const [error, setError] = useState(false)

	return (
		<InputContainer error={error}>
			<label htmlFor="email">{name}</label>
			<input
				type={type}
				id="email"
				name='email'
        value={data}
        onChange={(e) => setData(e.target.value)}
        required={true}
			/>
			{error && <span>Email no valido</span>}
		</InputContainer>
	);
}

export default InputEmail;
