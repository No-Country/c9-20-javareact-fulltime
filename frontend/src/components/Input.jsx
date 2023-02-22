import { useState } from "react";
import { InputContainer } from "../styled-components/Input.styled.";

function Input({ name, type, data, setData, pattern }) {
  const [error, setError] = useState(false)
  const validation = () => {
    if (pattern) {
      if (pattern.test(data)) {
        setError(false)
      } else {
        setError(true)
      }
    }
  }

	return (
		<InputContainer error={error}>
			<label htmlFor="email">{name}</label>
			<input
				type={type}
				name='email'
        value={data}
        required={true}
        onChange={(e) => setData(e.target.value)}
        onBlur={validation}
			/>
			{error && <span>{name} no valido</span>}
		</InputContainer>
	);
}

export default Input;
  