import { useParams } from "react-router-dom";
import { ItemFood } from "../../../../components";
import ItemsLoader from "./../../../../components/ItemsLoader";
import useListFood from "./../hook/useListFood";
const RenderingFood = () => {
	const { idCategory } = useParams();
	const { list, isLoading } = useListFood(idCategory);

	return (
		<>
			{isLoading ? (
				<>
					{list.map((item) => (
						<ItemFood
							key={item.id}
							id={item.id}
							title={item.name}
							image={item.image.url}
							description={item.description}
							portion={"1"}
							price={item.price}
						/>
					))}
				</>
			) : (
				<>
					<ItemsLoader
						borderRadius='50%'
						blockSize='240px'
						inlineSize='240px'
						top='-60%'
						insetInline='14%'
					/>
					<ItemsLoader
						borderRadius='50%'
						blockSize='240px'
						inlineSize='240px'
						top='-60%'
						insetInline='14%'
					/>
					<ItemsLoader
						borderRadius='50%'
						blockSize='240px'
						inlineSize='240px'
						top='-60%'
						insetInline='14%'
					/>
					<ItemsLoader
						borderRadius='50%'
						blockSize='240px'
						inlineSize='240px'
						top='-60%'
						insetInline='14%'
					/>
					<ItemsLoader
						borderRadius='50%'
						blockSize='240px'
						inlineSize='240px'
						top='-60%'
						insetInline='14%'
					/>
					<ItemsLoader
						borderRadius='50%'
						blockSize='240px'
						inlineSize='240px'
						top='-60%'
						insetInline='14%'
					/>
				</>
			)}
		</>
	);
};

export default RenderingFood;
