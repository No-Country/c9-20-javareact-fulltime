import { useParams } from "react-router-dom";
import { Items } from "../../../../components";
import useListFood from "./../hook/useListFood";
const RenderingFood = () => {
	const { idCategory } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	return (
		<>
			{isLoading ? (
				<>
					{list.map((item) => (
						<Items
							key={item.id}
							id={item.id}
							title={item.name}
							image={item.imgUrl}
							description={item.description}
							portion={"1"}
							price={item.price}
						/>
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
