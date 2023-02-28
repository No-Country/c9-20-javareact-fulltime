import { ItemFood } from "../../../components";
import ItemsLoader from "../../../components/ItemsLoader";
import { useFilterDishes } from "../../../hooks";
import { CarruselStyled } from "../styled-components/layout.styled";
import { foodSpecials } from "../utilities/FoodSpecials";

const Carrusel = ({ move }) => {
	const { list, isSuccess } = useFilterDishes(foodSpecials);

	/* const { data: di, isSuccess } = useGetDishesQuery();

	useEffect(() => {
		if (isSuccess && di !== undefined) {
			const { dishes } = di._embedded;

			const template = dishes.filter((item) => {
				if (
					item.name === "Combo libra" ||
					item.name === "Tabla I" ||
					item.name === "Tabla II" ||
					item.name === "Tabla III"
				) {
					return item;
				}
			});

			setList([...template]);
		}
	}, [isSuccess]);
 */
	return (
		<CarruselStyled translateX={`${move}%`}>
			<div>
				{isSuccess ? (
					list.map((item) => (
						<ItemFood
							key={item.id}
							id={item.id}
							title={item.name}
							image={item.image.url}
							description={item.description}
							price={item.price}
							category={item.category.name}
						/>
					))
				) : (
					<>
						<ItemsLoader
							borderRadius='29px'
							blockSize='192px'
							inlineSize='300px'
							top='-28%'
							insetInline='8%'
						/>
						<ItemsLoader
							borderRadius='29px'
							blockSize='192px'
							inlineSize='300px'
							top='-28%'
							insetInline='8%'
						/>
						<ItemsLoader
							borderRadius='29px'
							blockSize='192px'
							inlineSize='300px'
							top='-28%'
							insetInline='8%'
						/>
						<ItemsLoader
							borderRadius='29px'
							blockSize='192px'
							inlineSize='300px'
							top='-28%'
							insetInline='8%'
						/>
					</>
				)}
			</div>
		</CarruselStyled>
	);
};

export default Carrusel;
