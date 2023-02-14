import {
	ItemButton,
	ItemContainer,
	ItemDescription,
	ItemImg,
	ItemPeople,
	ItemPrice,
} from "../styled-components";
import { cart } from "../../../../public/icons"

const Items = ({ title, image, description, people, price, onClick }) => {
	return (
		<ItemContainer>
			<section>
				<ItemImg>
					<img src={image} alt="image" />
				</ItemImg>
				<h2>{title}</h2>
				<ItemDescription>
					{description}
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
