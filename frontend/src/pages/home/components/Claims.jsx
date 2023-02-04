import { ContainerFormClaimsStyled } from "../styled-components";
import HeaderSubTitle from "./HeaderSubTitle";
const Claims = () => {
	return (
		<section>
			<HeaderSubTitle title='Reclamos' textAlign='left' />
			<p>Deja tu reclamo aquí </p>
			<ContainerFormClaimsStyled>
				<textarea />
			</ContainerFormClaimsStyled>
			<article>
				<HeaderSubTitle title='Reserva' textAlign='left' />
				<p>Descripción </p>
				<p>Contactos </p>
			</article>
		</section>
	);
};

export default Claims;
