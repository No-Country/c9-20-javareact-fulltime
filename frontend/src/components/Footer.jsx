import {
	facebook,
	location,
	logo,
	phone,
	twitter,
	whatsapp,
} from "../../public/icons";
import { FooterStyled } from "../styled-components/FooterComponent";

const Footer = () => {
	return (
		<FooterStyled>
			<section>
				<img src={logo} alt="SVG logo image" />

				<div>
					<h3>Encontranos</h3>
					<ul>
						<li>
							<img src={location} alt="SVG location image" />
							Loremipsum00
						</li>
						<li>
							<img src={location} alt="SVG location image" />
							Loremipsum00
						</li>
					</ul>
				</div>

				<div>
					<h3>Contactos</h3>
					<ul>
						<li>
							<img src={phone} alt="SVG phone image" />
							000000000
						</li>
						<li>
							<img src={whatsapp} alt="SVG whatsapp image" />
							01010101010
						</li>
					</ul>
				</div>

				<div>
					<h3>Seguinos</h3>
					<ul>
						<img src={facebook} alt="SVG facebook image" />
						<img src={twitter} alt="SVG twitter image" />
					</ul>
				</div>
			</section>
		</FooterStyled>
	);
};

export default Footer;
