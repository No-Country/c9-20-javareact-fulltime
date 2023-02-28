import {
	CardList,
	DivisionLine,
	Footer,
	Header,
	HeaderSubTitle,
	ItemFood,
	ItemsLoader,
} from "../../../../components";
import { useFilterDishes } from "../../../../hooks";
import { Div } from "../../../../styled-components";
import { SectionStyled } from "../styled-components/layout.styled";
import { filterPromotions } from "../utilities/filterPromotions";
import promotions from "/img/promotionImg.jpg";
const ContentPromotion = () => {
	const { list, isSuccess } = useFilterDishes(filterPromotions);

	return (
		<>
			<Header />
			<CardList />
			<SectionStyled img={promotions} size='cover'>
				<HeaderSubTitle
					title='PROMO ESPECIAL DE FIN DE SEMANA'
					textAlign='center'
					level={2}
				/>

				<DivisionLine title={"Platos con descuentos"} />

				<Div gap={"180px"} padding='8em 0'>
					{isSuccess ? (
						list.length === 0 ? (
							<div>Sin Promociones</div>
						) : (
							list.map((item) => (
								<ItemFood
									key={item.id}
									category={item.category}
									description={item.description}
									img={item.image.url}
									nameFood={item.name}
									price={item.price}
								/>
							))
						)
					) : (
						<>
							<ItemsLoader />
							<ItemsLoader />
							<ItemsLoader />
							<ItemsLoader />
							<ItemsLoader />
						</>
					)}
				</Div>
			</SectionStyled>
			<Footer />
		</>
	);
};

export default ContentPromotion;
