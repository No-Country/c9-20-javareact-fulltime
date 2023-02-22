import { ButtonSearchStyled, SearchStyle } from "../styled-components";
import search from "/icons/search.svg";
const InputSearch = () => {
	return (
		<SearchStyle>
			<input type="text" placeholder='Buscar' />
			<ButtonSearchStyled img={search} size='cover' />
		</SearchStyle>
	);
};

export default InputSearch;
