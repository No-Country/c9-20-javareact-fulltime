import { useState } from "react";
import InfoCheckout from "../model/InfoCheckout.model";
const useConfirmation = () => {
	const state = new InfoCheckout();

	const [stateCheckout, setStateCheckout] = useState(state);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setStateCheckout({
			...stateCheckout,
			[name]: value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return {
		handleChange,
	};
};

export default useConfirmation;