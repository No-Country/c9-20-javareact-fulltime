import { ModalStyled } from "../styled-components";
import ButtonModal from "./ButtonModal";
import HeroImage from "./HeroImage";
import react from "/assets/react.svg";
import exit from "/icons/exit.svg";

const Modal = ({ open, handleCloset }) => {
	return (
		<ModalStyled visibility={open ? "visible" : "hidden"}>
			<div>
				<ButtonModal
					onClick={handleCloset}
					img={exit}
					size={"cover"}
					padding='8px'
				/>
				<HeroImage img={react} alt='img' blockSize='305px' inlineSize='383px' />
				<div>
					<div>
						<h2>Ñoquis</h2>
						<p>Breve descripción</p>
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
			</div>
		</ModalStyled>
	);
};

export default Modal;
