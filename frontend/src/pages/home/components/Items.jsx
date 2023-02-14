import { cart } from "../../../../public/icons";
import {
	ItemButton,
	ItemContainer,
	ItemDescription,
	ItemImg,
	ItemPeople,
	ItemPrice,
} from "../styled-components";

const Items = ({ title, image, description, people, price, onClick }) => {
	return (
		<ItemContainer>
			<section>
				<ItemImg>
					<img src={image} alt="image" />
				</ItemImg>
				<h2>{title}</h2>
				<ItemDescription>
					<h2>Descripcion</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						accusamus repellat impedit, iusto expedita distinctio, blanditiis
						corrupti libero veritatis quas iure vitae, atque cum exercitationem
						nam
					</p>
				</ItemDescription>
				<ItemPeople>Para {people} personas</ItemPeople>
				<ItemPrice>${price}</ItemPrice>
				<ItemButton onClick={onClick}>
					<h4>Agregar al Carrito</h4>
					<img src={cart} alt="image-cart" />
				</ItemButton>
			</section>
		</ItemContainer>
	);
};

export default Items;
