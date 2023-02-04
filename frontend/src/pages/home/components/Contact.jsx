import { SectionStyled } from "../styled-components";
import Claims from "./Claims";
import ContainerList from "./ContainerList";
import HeaderSubTitle from "./HeaderSubTitle";
const Contact = () => {
	return (
		<SectionStyled>
			<HeaderSubTitle title="Nosotros" textAlign='left' />
			<p>Breve descripción de la empresa (Restaurante) </p>
			<article>
				<HeaderSubTitle title="Contacto" textAlign='left' />
				<ContainerList items={["Teléfono", "WhatsApp", "Sucursales"]} />
			</article>
			<Claims />
		</SectionStyled>
	);
};

export default Contact;
