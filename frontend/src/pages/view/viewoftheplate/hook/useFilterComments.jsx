import { useEffect, useState } from "react";
import { useGetCommentsQuery } from "../../../../redux/query/FoodInfo.query";
const useFilterComments = (idFood) => {
	const [items, setItems] = useState([]);

	const { data: info, isSuccess } = useGetCommentsQuery(idFood);

	useEffect(() => {
		if (isSuccess) {
			const { comments } = info._embedded;
			setItems([...comments]);
		}
	}, [info]);
	return {
		items,
	};
};

export default useFilterComments;
