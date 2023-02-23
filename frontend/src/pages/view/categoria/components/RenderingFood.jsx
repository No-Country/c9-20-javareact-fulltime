<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { Items } from "../../../../components";
import useListFood from "./../hook/useListFood";
const RenderingFood = () => {
	const { idCategory } = useParams();
	const { list, isLoading } = useListFood(idCategory);

=======
import ItemFood from "../../../../components/ItemFood";
import { BadgeStar } from "../../../../styled-components";
import star from "/icons/Star.svg";
const RenderingFood = ({ list, isLoading }) => {
>>>>>>> 3086c40d0e854d83eda7cbd4f145826f60cb02ae
	return (
		<>
			{isLoading ? (
				<>
					{list.map((item) => (
						<Items
							key={item.id}
							id={item.id}
<<<<<<< HEAD
							title={item.name}
							image={item.imgUrl}
=======
							nameFood={item.nameFood}
							image={item.img}
							circle={"true"}
>>>>>>> 3086c40d0e854d83eda7cbd4f145826f60cb02ae
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
