import { useState } from "react";
import {
	PasswordContainer,
	PasswordWrapper,
	ShowPasswordIcon,
} from "../styled-components/InputPassword.styled";
import Icon from "./Icon";

function InputPassword({ error, name }) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<PasswordContainer>
			<label htmlFor="password">{ name }</label>
			<PasswordWrapper error={error}>
				<input
					type={showPassword ? "password" : "text"}
					id="password"
					name='password'
				/>
				<ShowPasswordIcon
					type='button'
					onClick={() => setShowPassword(!showPassword)}
				>
					<Icon />
				</ShowPasswordIcon>
			</PasswordWrapper>
			{error && <span>Contraseña invalida</span>}
		</PasswordContainer>
	);
}

export default InputPassword;
