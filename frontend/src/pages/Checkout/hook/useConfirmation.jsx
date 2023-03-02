import { useState } from "react";
import InfoCheckout from "../model/InfoCheckout.model";

const useConfirmation = () => {
	const state = new InfoCheckout();

	const [stateCheckout, setStateCheckout] = useState(state);

	const handleChange = (event) => {
		const { name, value } = event.target;

		console.log(name);
	};

	const onSubmit = (event) => {
		console.log(event);
	};

	return {
		onSubmit,
		handleChange,
	};
};

export default useConfirmation;
