import ItemFood from "../../../../components/ItemFood";
import { BadgeStar } from "../../../../styled-components";
import plato from "/assets/plato-pizza.png";
import star from "/icons/Star.svg";
const RenderingFood = ({ list, isLoading }) => {
	return (
		<>
			{isLoading ? (
				<>
					{list.map((item) => (
						<ItemFood
							key={item.id}
							id={item.id}
							nameFood={item.nameFood}
							image={plato}
							circle={"true"}
							description={item.description}
							portion={"1"}
							price={item.price}
						>
							<BadgeStar>
								<img src={star} alt="star svg image" />
								4.9
							</BadgeStar>
						</ItemFood>
					))}
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default RenderingFood;
{
	/* (isLoading) ?(
			{
            
            list.map((item) => (
				<ItemFood
					key={item.id}
					id={item.id}
					nameFood={item.nameFood}
					image={plato}
					circle={"true"}
					description={item.description}
					portion={"1"}
					price={item.price}
				>
					<BadgeStar>
						<img src={star} alt="star svg image" />
						4.9
					</BadgeStar>
				</ItemFood>
			))}
			):(<div>loading...</div>) */
}
