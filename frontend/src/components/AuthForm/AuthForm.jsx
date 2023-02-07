import styled from "styled-components";
import Icon from "./assets/Icon.jsx";
import { useState } from "react";
import { useLocation,Link } from "react-router-dom";
import {FormWrapper,Label,Input,PasswordInput,PasswordContainer,Button,ShowPasswordIcon,Form,Title,Wrapperremember,Wrappersignup } from "./AuthForm.component";



function AuthForm() {
	const [showPassword, setShowPassword] = useState(true);
	const [showPassword2, setShowPassword2] = useState(true);
	const { pathname } = useLocation();
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<FormWrapper>
			<Title>{pathname === "/signup" ? "signup" : "login"}</Title>

			<Form onSubmit={(e) => handleSubmit(e)}>
				<Label htmlFor="email">Email</Label>
				<Input type="email" id="email" name='email' />

				{pathname === "/signup" && (
					<>
						<Label htmlFor="name">Nombre</Label>
						<Input type="text" id="name" name='name' />
					</>
				)}

				<Label htmlFor="password">Contraseña</Label>
				<PasswordContainer>
					<PasswordInput
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
				</PasswordContainer>
				{pathname === "/signup" && (
					<>
						<Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
						<PasswordContainer>
							<PasswordInput
								type={showPassword2 ? "password" : "text"}
								id="password"
								name='password'
							/>
							<ShowPasswordIcon
								type='button'
								onClick={() => setShowPassword2(!showPassword2)}
							>
								<Icon />
							</ShowPasswordIcon>
						</PasswordContainer>
					</>
				)}
				{pathname === "/login" && (
					<Wrapperremember>
						<div>
              <input name="checkbox" type="checkbox" />
						<label htmlFor="checkbox">Recordar</label>
            </div>
						<Link to="/users/123" className="Link">
							¿Haz olvidado tu contraeña?
						</Link>
					</Wrapperremember>
				)}
				<Button type='submit'>Register</Button>
				{pathname === "/login" && (
					<>
						<Wrappersignup><p>¿No tienes cuenta?</p>{" "}
						<Link to="/signup" className="Link">
							Registrate
						</Link>
            </Wrappersignup>
					</>
				)}
			</Form>
		</FormWrapper>
	);
}

export default AuthForm;
