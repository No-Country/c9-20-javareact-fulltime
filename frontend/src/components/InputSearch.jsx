import { search } from "../../public/icons";
import { SearchStyle } from "../styled-components/InputSearchComponent";

const InputSearch = () => {
	return (
		<SearchStyle>
			<input type="text" placeholder='Buscar' />
			<img src={search} alt="SVG search icon" />
		</SearchStyle>
	);
};

export default InputSearch;
