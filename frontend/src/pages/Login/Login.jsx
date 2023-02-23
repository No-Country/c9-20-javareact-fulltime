import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { setCredentials } from "../../redux/slice/Auth.slice";
import { useLoginMutation } from "../../redux/slice/authApi.slice";
import {
	AuthContainer,
	AuthLayout,
	Button,
	Form,
	FormContainer,
	LinkRegister,
	LogoContainer,
	Title,
} from "../../styled-components/Auth.styled";
import { ForgotPassword } from "./styled-components/Login.styled";
import Logo from "/assets/logo.svg";

function AuthForm() {
	const [email, setEmail] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...response }));
			setEmail("");
			setPassword("");
			navigate("/");
		} catch (error) {
			console.log(error);
			setShowAlert(true);
			setTimeout(() => setShowAlert(false), 3000);
		}
	};

	return (
		<AuthLayout>
			<AuthContainer>
				<FormContainer>
					<Title>Iniciar sesión</Title>

					<Form onSubmit={(e) => handleSubmit(e)}>
						<Input
							name="Correo"
							data={email}
							setData={setEmail}
							type="email"
							pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
						/>
						<InputPassword
							error={passwordError}
							name="Contraseña"
							data={password}
							setData={setPassword}
						/>

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
			{showAlert && <Alert />}
			<LogoContainer>
				<img src={Logo} alt="Logo" />
			</LogoContainer>
		</AuthLayout>
	);
}

export default AuthForm;
