import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slice/Auth.slice";
import { useLoginMutation } from "../../redux/slice/authApi.slice";

function AuthForm() {
	const [email, setEmail] = useState("");

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
		  dispatch(setCredentials({...response}))
		  setEmail('')
		  setPassword('')
		  navigate('/home')
		} catch (error) {
		  console.log(error);
		}
  }

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
			<LogoContainer>
				<img src={Logo} alt="Logo" />
			</LogoContainer>
		</AuthLayout>
	);
}

export default AuthForm;
