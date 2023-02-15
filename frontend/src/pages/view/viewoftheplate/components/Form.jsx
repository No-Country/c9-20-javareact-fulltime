import React from "react";
import { FormStyled } from "../styled-components/layout.styled";

const Form = () => {
	return (
		<FormStyled>
			<label forHtml='text'>Déjanos tu comentario</label>
			<input type='text' placeholder="Deje su comentario aca" name='text' />
		</FormStyled>
	);
};

export default Form;
