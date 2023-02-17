import { FooterStyled } from "../styled-components/FooterComponent";

const Footer = () => {
	return (
		<FooterStyled>
			<section>
				<img src={""} alt="SVG logo image" />

				<div>
					<h3>Encontranos</h3>
					<ul>
						<li>
							<img src={""} alt="SVG location image" />
							Loremipsum00
						</li>
						<li>
							<img src={""} alt="SVG location image" />
							Loremipsum00
						</li>
					</ul>
				</div>

				<div>
					<h3>Contactos</h3>
					<ul>
						<li>
							<img src={""} alt="SVG phone image" />
							000000000
						</li>
						<li>
							<img src={""} alt="SVG whatsapp image" />
							01010101010
						</li>
					</ul>
				</div>

				<div>
					<h3>Seguinos</h3>
					<ul>
						<img src={""} alt="SVG facebook image" />
						<img src={""} alt="SVG twitter image" />
					</ul>
				</div>
			</section>
		</FooterStyled>
	);
};

export default Footer;
