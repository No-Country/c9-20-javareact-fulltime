import React from "react";
import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import Card from "./Card";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";

const ItemListContainer = () => {
	const { open, handleCloset, handleOpen } = useFunctionalityModal();
	return (
		<SectionStyled>
			<Modal open={open} handleCloset={handleCloset} />

			<HeaderSubTitle
				title='Productos Destacados'
				textAlign='center'
				level={2}
			/>
			<Div>
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
				<Items onClick={handleOpen} />
			</Div>
		</SectionStyled>
	);
};

export default ItemListContainer;
