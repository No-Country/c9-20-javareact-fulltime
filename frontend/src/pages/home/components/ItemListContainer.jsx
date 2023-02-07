import React from "react";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import Card from "./Card";

const ItemListContainer = () => {
	return (
		<>
			<Div>
				<Card />
				<Card />
				<Card />
				<Card />
			</Div>
			<h1>Productos Destacados</h1>
			<Div>
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
			</Div>
		</>
	);
};

export default ItemListContainer;
