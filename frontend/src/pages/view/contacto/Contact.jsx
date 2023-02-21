import HeaderSubTitle from "../../../components/HeaderSubTitle";
import ContainerList from "./ContainerList";
const Contact = () => {
	return (
		<section>
			<HeaderSubTitle title="Nosotros" textAlign='left' level={2} />
			<p>Breve descripción de la empresa (Restaurante) </p>
			<article>
				<HeaderSubTitle title="Contacto" textAlign='left' level={2} />
				<ContainerList items={["Teléfono", "WhatsApp", "Sucursales"]} />
			</article>
		</section>
	);
};

export default Contact;
