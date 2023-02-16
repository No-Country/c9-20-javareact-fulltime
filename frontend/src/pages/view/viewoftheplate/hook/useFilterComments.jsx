import { useEffect, useState } from "react";
import { useGetCommentsQuery } from "../../../../redux/query/FoodInfo.query";

const useFilterComments = (category, idFood) => {
	const [items, setItems] = useState([]);

	const { data: comments, isSuccess } = useGetCommentsQuery();

	useEffect(() => {
		if (isSuccess) {
			const template = comments.filter(
				(item) => item.nameCategory === category && item.idFood === idFood,
			);

			setItems([...template]);
		}
	}, []);
	console.log(comments);
	return {
		items,
	};
};

export default useFilterComments;
