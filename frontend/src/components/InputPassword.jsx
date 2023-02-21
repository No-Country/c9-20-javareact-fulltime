import { useState } from "react";
import {
	PasswordContainer,
	PasswordWrapper,
	ShowPasswordIcon,
} from "../styled-components/InputPassword.styled";
import Icon from "./Icon";

function InputPassword({ error, name, data, setData }) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<PasswordContainer>
			<label htmlFor="password">{ name }</label>
			<PasswordWrapper error={error}>
				<input
					type={showPassword ? "text" : "password"}
					id="password"
					name='password'
          value={data}
          onChange={(e) => setData(e.target.value)}
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
