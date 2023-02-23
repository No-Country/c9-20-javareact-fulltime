import { useEffect, useState } from "react";
import {
	useGetDishesCafeteriaQuery,
	useGetDishesChurrasqueriaQuery,
	useGetDishesPastasQuery,
	useGetDishesPizzaQuery,
	useGetDishesPostresQuery,
	useGetDishesSaludableQuery,
	useGetInfoFoodQuery,
} from "../../../../redux/query/FoodInfo.query";
const useListFood = (idNameCategory) => {
	const [list, setList] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const { data: food } = useGetInfoFoodQuery();
	const { data: pizza, isSuccess } = useGetDishesPizzaQuery();
	const { data: pastas } = useGetDishesPastasQuery();
	const { data: saludable } = useGetDishesSaludableQuery();
	const { data: cafeteria } = useGetDishesCafeteriaQuery();
	const { data: postres } = useGetDishesPostresQuery();
	const { data: churrasqueria } = useGetDishesChurrasqueriaQuery();

	useEffect(() => {
		if (isSuccess) {
			pizza._embedded.dishes;
			pastas._embedded.dishes;
			pastas._embedded.dishes;
			saludable._embedded.dishes;
			cafeteria._embedded.dishes;
			churrasqueria._embedded.dishes;
			postres._embedded.dishes;

			const template = [
				...pizza._embedded.dishes,
				...pastas._embedded.dishes,
				...saludable._embedded.dishes,
				...cafeteria._embedded.dishes,
				...postres._embedded.dishes,
				...churrasqueria._embedded.dishes,
			];

			const aux = [];

			template.forEach((items) => {
				if (items.category.name === idNameCategory) {
					aux.push(items);
				}
			});

			setList([...aux]);
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
