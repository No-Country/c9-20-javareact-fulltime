import React from "react";
import {
	CheckCart,
	CheckContainer,
	CheckData,
	CheckPayment,
} from "./CheckoutStyled.jsx";
const Checkout = () => {
	return (
		<>
			<h1>Logo</h1>
			<h2 className="text-center">Checkout</h2>
			<CheckContainer>
				<CheckData>
					<form>
						<h2>Confirmar datos</h2>
						<label htmlFor="name">Nombre</label>
						<input type="text" />
						<label htmlFor="adress">Dirección</label>
						<input type="text" />
						<label htmlFor="phone">Teléfono</label>
						<input type="text" />
						<label htmlFor="aclaracion">Aclaración</label>
						<input type="text" />
					</form>
				</CheckData>
				<CheckPayment>
					<form>
						<h2>Método de Pago</h2>
						<h3>Seleccione el método de pago</h3>
						<div>
							<input type="checkbox" name="card" id="" />
							<label htmlFor="">Tarjeta</label>
							<input type="checkbox" name="cash" id="" />
							<label htmlFor="">Efectivo</label>
						</div>
						<label htmlFor="name">Nombre que figura en la tarjeta</label>
						<input type="text" />
						<label htmlFor="name">Numero</label>
						<input type="text" />
						<label htmlFor="name">Código</label>
						<input type="password" name="code" id="" />
					</form>
				</CheckPayment>
				<CheckCart>
					<h2>cart</h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic labore
					quis voluptatem veniam odio minima ipsa, aut doloremque deserunt sint
					optio alias quos, nemo odit inventore modi ad? Temporibus, repellat.
				</CheckCart>
			</CheckContainer>
		</>
	);
};

export default Checkout;
