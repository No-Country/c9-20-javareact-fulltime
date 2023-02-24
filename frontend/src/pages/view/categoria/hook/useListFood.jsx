import { useEffect, useState } from "react";
import { useGetDishesQuery } from "../../../../redux/query/FoodInfo.query";

const useListFood = (idNameCategory) => {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { data: dis, isSuccess } = useGetDishesQuery();

	useEffect(() => {
		if (isSuccess) {
			const { dishes } = dis._embedded;
			const templete = dishes.filter(
				(element) => element.category.name === idNameCategory,
			);

			setList([...templete]);
			setIsLoading(true);
		}
	}, []);

	return {
		list,
		isLoading,
	};
};

export default useListFood;
