import { CardList, Footer, Header } from "../../../components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import { ContactStyled } from "./styled-components/layout.styled";
import wha from "/icons/Whatsapp.svg";
import location from "/icons/location.svg";
import phone from "/icons/phone.svg";
const Contact = () => {
	return (
		<>
			<Header />
			<CardList />
			<ContactStyled>
				<HeaderSubTitle title="Nosotros" textAlign='left' level={2} />
				<p>
					Somos una empresa dedicada a la gastronomía desde 1995, fundada en la
					ciudad de Buenos Aires. Nuestro objetivo siempre fue brindar al
					publico una mejor experiencia disgustando nuestros platos elaborados
					por el Chef Héctor Martínez, quien nos acompaña desde siempre. Estamos
					orgullosamente felices de que nos sigan eligiendo en cada encuentro
					familiar.
				</p>
				<div>Falta terminar</div>
				<article>
					<HeaderSubTitle title="Contacto" textAlign='left' level={2} />
					<ul>
						<li>
							<img src={phone} alt='phone' /> <span>Teléfono : </span>
							<span>11 - 23232323</span>
						</li>
						<li>
							<img src={wha} alt='WhatsApp' /> <span>WhatsApp: </span>
							<span>11 - 45454545</span>
						</li>
						<li>
							<img src={location} alt='location' />
							<span>Sucursales: : </span>
							<span>Urquiza 2345 - Capital Avellaneda 2345 - Palermo</span>
						</li>
					</ul>
				</article>

				<article>
					<HeaderSubTitle title="Reclamos" textAlign='left' level={2} />
					<form
						onSubmit={(event) => {
							event.target.PreventDefault();
						}}
					>
						<label>Puedes dejar tu reclamo</label>
						<input type="text" />
						<input type="submit" value='Enviar' />
					</form>
				</article>

				<article>
					<HeaderSubTitle title="Reserva" textAlign='left' level={2} />
					<p>
						Para realizar una reserva se recomienda tener en cuenta una
						anticipación de 24hs. Podrás consultar disponibilidad a través de
						nuestros contactos telefónicos o acercándote a la recepción de
						nuestras sucursales.
					</p>
					<ul>
						<li>Teléfono: 11 - 23232323</li>
					</ul>
				</article>
			</ContactStyled>
			<Footer />
		</>
	);
};

export default Contact;
