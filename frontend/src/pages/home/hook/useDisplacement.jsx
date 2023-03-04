import { useState } from "react";

const useDisplacement = () => {
	const [move, setMove] = useState(-4);

	const handleMoveRight = () => {
		if (move !== -4) {
			setMove(move + 8);
		}
	};
	const handleMoveLeft = () => {
		if (move !== -14) {
			setMove(move - 12);
		}
	};

	return {
		move,
		handleMoveRight,
		handleMoveLeft,
	};
};

export default useDisplacement;
