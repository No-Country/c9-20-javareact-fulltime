import React from "react";
import { useResolvedPath } from "react-router-dom";
import { useGetInfoFoodQuery } from "../../../redux/query/FoodInfo.query";
import { Div } from "../../../styled-components";
import useListFood from "../../view/hook/useListFood";
import Items from "../components/Items";
import Card from "./Card";

const ItemListContainer = () => {
	const { data: food, isSuccess } = useGetInfoFoodQuery();
	const { namePath } = useResolvedPath();
	const { list, isLoading } = useListFood(food, isSuccess, namePath);

	return (
		<>
			<Div>
				{/* 				///TODO mapeando las card con la api falsa */}
				{isSuccess ? (
					food.map((items) => (
						<Card key={items.id} name={items.name} link={items.name} />
					))
				) : (
					<div>loading...</div>
				)}
			</Div>
			<h1>Productos Destacados</h1>
			<Div>
				<Items />
				<Items />
				<Items />
				<Items />
			</Div>
		</>
	);
};

export default ItemListContainer;
