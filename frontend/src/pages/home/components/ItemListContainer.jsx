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
			<Modal
				open={open}
				handleCloset={handleCloset}
				handleCloset={handleCloset}
			/>

			<Div>
				<Card />
				<Card />
				<Card />
				<Card />
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
