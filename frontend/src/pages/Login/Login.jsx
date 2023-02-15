import { useState } from "react";
import Icon from "../../components/Icon";
import Logo from "/assets/logo.svg";
import {
	AuthLayout,
	AuthContainer,
	LogoContainer,
	Title,
	FormContainer,
	Form,
	Button,
	LinkRegister,
} from "../../styled-components/Auth.styled";
import { ForgotPassword } from "./styled-components/Login.styled";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { Link, useLocation } from "react-router-dom";

function AuthForm() {
	const [email, setEmail] = useState("");
	const [emailError, seEmailError] = useState(false);

	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);

	const { pathname } = useLocation();
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<AuthLayout>
			<AuthContainer>
				<FormContainer>
					<Title>Iniciar sesión</Title>

					<Form onSubmit={(e) => handleSubmit(e)}>
						<Input
              error={emailError}
              name="Correo"
              type="email"
            />
						<InputPassword error={passwordError} name="Contraseña"/>

						<ForgotPassword>
							<Link to="/users/123">¿Olvidaste tu contraseña?</Link>
						</ForgotPassword>
						<Button type='submit'>Iniciar sesión</Button>
					</Form>

					<LinkRegister>
						¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
					</LinkRegister>

				</FormContainer>
			</AuthContainer>
			<LogoContainer>
				<img src={Logo} alt="Logo" />
			</LogoContainer>
		</AuthLayout>
	);
}

export default AuthForm;
