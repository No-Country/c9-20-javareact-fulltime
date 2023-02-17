import { ContainerButtonStyled } from "../styled-components";
const ContainerButton = ({ handleMoveLeft, handleMoveRight }) => {
	return (
		<ContainerButtonStyled>
			<button onClick={handleMoveRight} />
			<button onClick={handleMoveLeft} />
		</ContainerButtonStyled>
	);
};

export default ContainerButton;
