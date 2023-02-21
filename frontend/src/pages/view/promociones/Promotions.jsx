import DivisionLine from "../../../components/DivisionLine";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import ItemFood from "../../../components/ItemFood";
import { Div } from "../../../styled-components";
import Footer from "./../../../components/Footer";
import Header from "./../../../components/Header";
import { SectionStyled } from "./styled-components/layout.styled";
import platoPizza from "/img/fondoPastas.jpg";
const Promotions = () => {
	return (
		<>
			<Header />
			<SectionStyled img={platoPizza} size='cover'>
				<HeaderSubTitle
					title='PROMO ESPECIAL DE FIN DE SEMANA'
					textAlign='center'
					level={2}
				/>

				<DivisionLine title={"Platos con descuentos"} />

				<Div gap={"180px"} padding='8em 0'>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
					<ItemFood
						description={"Tomate cherry, rúcula y aceitunas negras"}
						nameFood={"Tallarines"}
						portion={"2"}
						price={950}
					/>
				</Div>
			</SectionStyled>
			<Footer />
		</>
	);
};

export default Promotions;
