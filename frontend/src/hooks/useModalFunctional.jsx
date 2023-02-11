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
			const item = food.filter((items) => items.name === nameFood);
			const template = item[id - 1];
			const itemFood = template.list.filter((item) => item.id === id);
			console.log(itemFood);
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
