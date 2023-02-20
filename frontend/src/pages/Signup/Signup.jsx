import { useState } from "react";
import Logo from "/assets/logo.svg";
import {
	AuthLayout,
	LogoContainer,
	AuthContainer,
	FormContainer,
	Title,
	Form,
	Button,
} from "../../styled-components/Auth.styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slice/Auth.slice";
import { useSignupMutation } from "../../redux/slice/authApi.slice";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

function Signup() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);

	const [showPassword, setShowPassword] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);

	const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
		e.preventDefault();
			try {
				const response = await signup({ name, email, password }).unwrap();
				dispatch(setCredentials({ ...response }));
				setName("");
				setEmail("");
				setPassword("");
        console.log('prenavigate');
				navigate("/home");
        console.log('posNavigate');
			} catch (error) {
				console.log(error);
		};
	};

	return (
		<AuthLayout>
			<AuthContainer>
				<FormContainer>
					<Title>Registro</Title>

					<Form onSubmit={(e) => handleSubmit(e)}>
						<Input
              name="Correo"
              type="email"
              data={email}
              setData={setEmail}
            />
						<Input
             name="Nombre"
             error={passwordError}
             data={name}
             setData={setName}
            />

						<InputPassword
              error={passwordError}
              name="Contraseña"
              data={password}
              setData={setPassword}
            />
						<InputPassword
              error={confirmPasswordError}
              name="Confirmar Contraseña"
              data={confirmPassword}
              setData={setConfirmPassword}
            />

						<Button> Registrarse </Button>
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
