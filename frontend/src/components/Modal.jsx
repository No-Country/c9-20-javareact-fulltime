import { ModalStyled } from "../styled-components";
import ButtonModal from "./ButtonModal";
import HeroImage from "./HeroImage";
import react from "/assets/react.svg";
import exit from "/icons/exit.svg";

const Modal = ({ open, item }) => {
	return (
		<ModalStyled visibility={open ? "visible" : "hidden"}>
			<div>
				{/* //TODO Borrar */}
				<ButtonModal
					onClick={() => {}}
					img={exit}
					size={"cover"}
					padding='8px'
				/>
				{item !== undefined ? (
					<div>
						<div>
							<h2>{item.nameFood}</h2>
							<p>{item.description}</p>
							<p>demora de {item.delay}</p>
							<p>Precio: {item.price}</p>
						</div>

						<div>
							<button onClick={() => {}}>+</button>
							<span>0</span>
							<button onClick={() => {}}>-</button>
						</div>
						<div>
							<button onClick={() => {}}>Agregar</button>
						</div>
					</div>
				) : (
					<div>loading...</div>
				)}
				<HeroImage img={react} alt='img' blockSize='305px' inlineSize='383px' />
			</div>
		</ModalStyled>
	);
};

export default Modal;
