import { InputStyled } from "../styled-components/layout.styled";
const Input = ({ type, name }) => {
	return <InputStyled type={type} name={name} placeholder="Buscar" />;
};

export default Input;
