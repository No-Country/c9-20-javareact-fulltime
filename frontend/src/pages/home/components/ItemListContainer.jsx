import { Modal } from "../../../components";
import { useFunctionalityModal } from "../../../hooks";
import { Div } from "../../../styled-components";
import Items from "../components/Items";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import { item90, item91, item92 } from "../../../../public/assets";

const ItemListContainer = () => {
	const { open, handleCloset, handleOpen } = useFunctionalityModal();
	return (
		<SectionStyled>
			<Modal open={open} handleCloset={handleCloset} />

			<HeaderSubTitle
				title='DESCATADOS DE ESTA SEMANA'
				textAlign='center'
				level={2}
			/>
			<Div gap={"50px"} style={{transform: "translateY(4em)"}}>
				<Items
					title={"Tabla I"} 
					image={item90} 
					description={"Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante."}
					people={"2"}
					price={2500} 
					onClick={handleOpen} />
				<Items
					title={"Tabla II"} 
					image={item91} 
					description={"Salame, jamón crudo, queso gruyere, aceitunas mixtas, salsa especial."}
					people={"2"}
					price={2800} 
					onClick={handleOpen} />
				<Items
					title={"Tabla III"} 
					image={item92} 
					description={"Salsa picante, salsa cheddar, salsa 4 quesos, choclo asado, mix de chorizos, porción de papas."}
					people={"3"}
					price={4800} 
					onClick={handleOpen} />
			</Div>
		</SectionStyled>
	);
};

export default ItemListContainer;
