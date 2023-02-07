import React from "react";

const Modal = () => {
	const handleAdd = () => {};
	const handleSubtract = () => {};

	return (
		<div>
			<div>img</div>
			<div>
				<div>
					<button onClick={handleAdd}>+</button>
					<span>0</span>
					<button onClick={handleSubtract}>-</button>
				</div>

				<div>
					<button onClick={handleAdd}>Agregar </button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
