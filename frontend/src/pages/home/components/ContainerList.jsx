import { ContainerListStyled } from "../styled-components";

const ContainerList = ({ items }) => {
	return (
		<ContainerListStyled>
			{items.map((item) => (
				<li>{item}</li>
			))}
		</ContainerListStyled>
	);
};

export default ContainerList;
