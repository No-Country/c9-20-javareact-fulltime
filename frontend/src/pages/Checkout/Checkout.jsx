import React from "react";
import { useSelector } from "react-redux";
import {
	CheckCart,
	CheckContainer,
	CheckData,
	CheckPayment,
} from "./CheckoutStyled.jsx";

const Checkout = () => {
	const cart = useSelector((state) => state.card);
	console.log(cart);
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
						<label htmlFor="address">Dirección</label>
						<input type="text" />
						<label htmlFor="phone">Telefono</label>
						<input type="text" />
						<label htmlFor="aclaracion">Aclaracion</label>
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
					{cart.map((cr) => (
						<div key={cr.id}>
							{cr.name}
							{cr.name}
						</div>
					))}
				</CheckCart>
			</CheckContainer>
		</>
	);
};

export default Checkout;
