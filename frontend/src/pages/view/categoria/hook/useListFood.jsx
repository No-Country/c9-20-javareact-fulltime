import { useEffect, useState } from "react";
import { useGetInfoFoodQuery } from "../../../../redux/query/FoodInfo.query";

const useListFood = (namePath) => {
	const [list, setList] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const { data: food, isSuccess } = useGetInfoFoodQuery();

	useEffect(() => {
		if (isSuccess) {
			const response = food
				.filter((items) => items.name === namePath)
				.map((items) => items.list);

			setList(...response);
			setIsLoading(true);
		}
	}, []);
	return {
		list,
		isLoading,
	};
};

export default useListFood;
