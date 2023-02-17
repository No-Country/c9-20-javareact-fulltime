import {
	FooterContainerStyled,
	FooterContainerTwo,
	FooterStyled,
} from "../styled-components";
import face from "/icons/facebook.svg";
import location from "/icons/location.svg";
import logo from "/icons/logo.svg";
import phone from "/icons/phone.svg";
import twitter from "/icons/twitter.svg";
import WhatsApp from "/icons/whatsapp.svg";
const Footer = () => {
	return (
		<FooterStyled>
			<FooterContainerStyled>
				<img src={logo} alt="SVG logo image" />
				<div>
					<strong>Encontranos</strong>
					<ul>
						<li>
							<img src={location} alt="SVG location image" />
							<p>Loremipsum00</p>
						</li>
						<li>
							<img src={location} alt="SVG location image" />
							<p>Loremipsum00</p>
						</li>
					</ul>
				</div>
				<div>
					<strong>Contactos</strong>
					<ul>
						<li>
							<img src={phone} alt="SVG phone image" />
							<p>000000000</p>
						</li>
						<li>
							<img src={WhatsApp} alt="SVG whatsapp image" />
							<p>01010101010</p>
						</li>
					</ul>
				</div>
			</FooterContainerStyled>

			<FooterContainerTwo>
				<strong>Seguinos</strong>
				<ul>
					<li>
						<img src={face} alt="SVG facebook image" />
					</li>
					<li>
						<img src={twitter} alt="SVG twitter image" />
					</li>
				</ul>
			</FooterContainerTwo>
		</FooterStyled>
	);
};

export default Footer;
