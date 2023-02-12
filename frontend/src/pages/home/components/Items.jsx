import {
	ItemButton,
	ItemContainer,
	ItemDescription,
	ItemImg,
} from "../styled-components";
import React from "/assets/react.svg";
const Items = ({ onClick }) => {
	return (
		<>
			<ItemContainer>
				<h1>Pizza</h1>
				<ItemImg>
					<img src={React} alt="image" />
				</ItemImg>
				<ItemDescription>
					<h2>Descripcion</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						accusamus repellat impedit, iusto expedita distinctio, blanditiis
						corrupti libero veritatis quas iure vitae, atque cum exercitationem
						nam
					</p>
				</ItemDescription>
				<ItemButton onClick={onClick}>
					<h4>Agregar al Carrito</h4>
				</ItemButton>
			</ItemContainer>
		</>
	);
};

export default Items;
