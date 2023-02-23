import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../../../redux/query/FoodInfo.query";
const useCategories = () => {
	const [categories, setCategories] = useState([]);

	const { data: cate, isLoading } = useGetCategoriesQuery();

	useEffect(() => {
		if (!isLoading) {
			const { dishCategories } = cate._embedded;
			setCategories([...dishCategories]);
		}
	}, [cate]);
	console.log(categories);
	return {
		categories,
		isLoading,
	};
};

export default useCategories;
