import { useState } from "react";

const useFunctionalityModal = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleCloset = () => setOpen(false);

	return {
		open,
		handleOpen,
		handleCloset,
	};
};

export default useFunctionalityModal;
