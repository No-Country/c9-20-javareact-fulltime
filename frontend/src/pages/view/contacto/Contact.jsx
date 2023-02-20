import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import Claims from "./Claims";
import ContainerList from "./ContainerList";
const Contact = () => {
	return (
		<SectionStyled>
			<HeaderSubTitle title="Nosotros" textAlign='left' level={2} />
			<p>Breve descripción de la empresa (Restaurante) </p>
			<article>
				<HeaderSubTitle title="Contacto" textAlign='left' level={2} />
				<ContainerList items={["Teléfono", "WhatsApp", "Sucursales"]} />
			</article>
			<Claims />
		</SectionStyled>
	);
};

export default Contact;
