import { useState } from "react";
import Logo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import {
	AuthLayout,
  LogoContainer,
	AuthContainer,
	FormContainer,
	Title,
  Form,
	Button,
} from "../../styled-components/Auth.styled";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

function Signup() {
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState(false)

	const [name, setName] = useState('')
	const [nameError, setNameError] = useState(false)
  
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState(false)

	const [confirmPassword, setConfirmPassword] = useState('')
	const [confirmPasswordError, setConfirmPasswordError] = useState(false)

	const [showPassword, setShowPassword] = useState(false)
	const [showPassword2, setShowPassword2] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<AuthLayout>
			<AuthContainer>
				<FormContainer>
					<Title>Registro</Title>

					<Form>
						<Input
							name="Correo"
							error={email}
							pattern={true}
							type="email"
						/>
						<Input
              name="Nombre"
              error={passwordError}
              pattern={true}
            />
						<InputPassword 
              error={passwordError}
              name="Contraseña"
            />
						<InputPassword
              error={passwordError}
              name="Confirmar Contraseña"
            />
						<Button type="submit"> Registrarse </Button>
					</Form>

				</FormContainer>
			</AuthContainer>
			<LogoContainer>
				<img src={Logo} alt="Logo" />
			</LogoContainer>
		</AuthLayout>
	);
}

export default Signup;
