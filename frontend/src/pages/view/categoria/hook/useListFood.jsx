import { useEffect, useState } from "react";
import { useGetDishesQuery } from "../../../../redux/query/FoodInfo.query";
const useListFood = (idNameCategory) => {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { data: dis, isSuccess } = useGetDishesQuery();

	useEffect(() => {
		if (isSuccess) {
			const { dishes } = dis._embedded;

			const templete = [];

			dishes.forEach((element) => {
				if (element.category.name === idNameCategory) {
					templete.push(element);
				}
			});

			setList([...templete]);
			setIsLoading(true);
		}
	}, []);
	console.log(list);
	return {
		list,
		isLoading,
	};
};

export default useListFood;
