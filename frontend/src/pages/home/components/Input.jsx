import { InputStyled } from "../styled-components";
const Input = ({ type, name }) => {
	return <InputStyled type={type} name={name} placeholder="Buscar" />;
};

export default Input;
