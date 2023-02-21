import { useState } from "react";

const useDisplacement = () => {
	const [move, setMove] = useState(26);

	const handleMoveRight = () => {
		if (move !== 26) {
			setMove(move + 52);
		}
	};
	const handleMoveLeft = () => {
		if (move !== -26) {
			setMove(move - 52);
		}
	};

	return {
		move,
		handleMoveRight,
		handleMoveLeft,
	};
};

export default useDisplacement;
