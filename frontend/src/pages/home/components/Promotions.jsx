import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div, BadgeStar } from "../../../styled-components";
import Items from "../components/Items";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import DivisionLine from "../../../components/DivisionLine";
import { platoPasta, platoPizza, platoEnsalada } from "../../../../public/assets";
import { HomeContainer } from "../styled-components/HomeComponents";
import star from "../../../../public/icons/Star.svg"

const Promotions = () => {
	const { open, handleCloset, handleOpen } = useFunctionalityModal();

	return (
		<HomeContainer>
			<SectionStyled>
				<HeaderSubTitle
					title='PROMO ESPECIAL DE FIN DE SEMANA'
					textAlign='center'
					level={2}
				/>

				<DivisionLine title={"Platos con descuentos"} />

				<Div gap={"80px"} ancho={"300px"}>
					<Items
						title={"Tallarines"}
						image={platoPasta}
						circle={"true"}
						description={"Tomate cherry, rúcula y aceitunas negras"}
						people={"2"}
						price={950}>
						<BadgeStar>
							<img src={star} alt="star svg image" />
							4.9
						</BadgeStar>
					</Items>
					<Items
						title={"Pizza"}
						image={platoPizza}
						circle={"true"}
						description={"Panceta, choclo, aceitunas negras y champiñón"}
						people={"2"}
						price={1020}>
						<BadgeStar>
							<img src={star} alt="star svg image" />
							4.9
						</BadgeStar>
					</Items>
					<Items
						title={"Ensalada Mixta"}
						image={platoEnsalada}
						circle={"true"}
						description={"Huevo, rúcula, pollo, tomate, zanahoria salteada "}
						people={"2"}
						price={480}>
						<BadgeStar>
							<img src={star} alt="star svg image" />
							4.9
						</BadgeStar>
					</Items>
				</Div>
			</SectionStyled>
		</HomeContainer>
	);
};

export default Promotions;
