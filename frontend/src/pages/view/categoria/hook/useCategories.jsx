import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../../../redux/query/FoodInfo.query";
const useCategories = () => {
	const [categories, setCategories] = useState([]);

	const { data: cate, isSuccess } = useGetCategoriesQuery();
	console.log(cate);
	useEffect(() => {
		if (isSuccess) {
			const { dishCategories } = cate._embedded;
			setCategories([...dishCategories]);
		}
	}, [cate]);

	return {
		categories,
		isSuccess,
	};
};

export default useCategories;
