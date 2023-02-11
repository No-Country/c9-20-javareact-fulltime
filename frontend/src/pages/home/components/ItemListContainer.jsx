import React from "react";
import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import Card from "./Card";
const ItemListContainer = () => {
	const { open, handleCloset, handleOpen } = useFunctionalityModal();
	return (
		<>
			<Modal open={open} handleCloset={handleCloset} />

			<Div>
				<Card name='pastas' link='pastas' />
				<Card name='postres' link='postres' />
				<Card name='churrasqueria' link='churrasqueria' />
				<Card name='cafeteria' link='cafeteria' />
				<Card name='saludable' link='saludable' />
				<Card name='pizzas' link='pizzas' />
			</Div>
			<h1>Productos Destacados</h1>
			<Div>
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
			</Div>
		</>
	);
};

export default ItemListContainer;
