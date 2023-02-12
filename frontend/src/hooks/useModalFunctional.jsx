import { useState } from "react";
import { useGetInfoFoodQuery } from "../redux/query/FoodInfo.query";

const useModalFunctional = () => {
	const [open, setOpen] = useState(false);

	const [itemFood, setItemFood] = useState();

	const { data: food, isSuccess } = useGetInfoFoodQuery();

	const handleClosetModal = () => setOpen(false);

	const handleOpenModal = (nameFood, id) => {
		setOpen(true);

		if (isSuccess) {
			let template = 0;

			food.forEach((item) => {
				if (item.name === nameFood) {
					template = item.list;
				}
			});
			const itemFood = template.filter((item) => item.id === id);
			setItemFood(...itemFood);
		}
	};

	return {
		open,
		handleOpenModal,
		handleClosetModal,
		itemFood,
	};
};

export default useModalFunctional;
