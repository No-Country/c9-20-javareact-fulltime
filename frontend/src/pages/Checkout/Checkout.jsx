import React, { useState } from "react";
import { useSelector} from "react-redux";
import {
	CheckCart,
	CheckContainer,
	CheckData,
	Unwrapped,
} from "./CheckoutStyled.jsx";
import { Button, DivCol } from "../../styled-components/layout/layout.styled"

const Checkout = () => {
	const cart = useSelector(state => state.cart.items);
	const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('local');
	const [selectedPaymentOption, setSelectedPaymentOption] = useState('debito');
	console.log(cart);
	return (
		<>
			<CheckContainer>
				<CheckData>
					<div>
						<h1>Envío</h1>
						<input
							type="radio"
							id="local"
							name="checkEnv"
							checked={selectedDeliveryOption === 'local'}
							onChange={() => setSelectedDeliveryOption('local')}
						/>
						<label htmlFor="">Retiro en local</label>
						<input
							type="radio"
							id="delivery"
							name="checkEnv"
							checked={selectedDeliveryOption === 'delivery'}
							onChange={() => setSelectedDeliveryOption('delivery')}
						/>
						<label htmlFor="">Delivery</label>
					</div>
					<h1>Pago</h1>
					<div>
						<h2>Método de pago</h2>
						<input
							type="radio"
							id="debito"
							name="check"
							checked={selectedPaymentOption === 'debito'}
							onChange={() => setSelectedPaymentOption('debito')}
						/>
						<label htmlFor="">Débito</label>
						<input
							type="radio"
							id="credito"
							name="check"
							checked={selectedPaymentOption === 'credito'}
							onChange={() => setSelectedPaymentOption('credito')}
						/>
						<label htmlFor="">Crédito</label>
					</div>
					{selectedPaymentOption === 'debito' && (
						<>
							<form action="">
								<label htmlFor="">Número de tarjeta</label>
								<input type="number" name="numberCard" id="" />
								<label htmlFor="">Fecha de vencimiento</label>
								<input type="month" name="numberCvv" id="" />
								<label htmlFor="">CVV</label>
								<input type="password" name="numberCvv" id="" />
							</form>
							<Button>Confirmar</Button>
						</>
					)}
					{selectedPaymentOption === 'credito' && (
						<>
							<Unwrapped >
								<select>
									<option>Seleccionar Tarjeta</option>
									<option>VISA</option>
									<option>MASTERCARD</option>
								</select>
							</Unwrapped>
							<div>
								<h3>Cuotas</h3>
								<input type="radio" name="cuotas" checked />
								<label htmlFor="">1 Cuota</label>
								<input type="radio" name="cuotas" />
								<label htmlFor="">3 Cuotas</label>
								<input type="radio" name="cuotas" />
								<label htmlFor="">6 Cuotas</label>
							</div>
							<Button>Confirmar</Button>
						</>
					)}
				</CheckData>
				<CheckCart>
					<div>
					<h1>Resumen</h1>
					{cart.map((cr) => (
						<DivCol key={cr.id}>
							{cr.name}
							<br />
							Subtotal: ${cr.subTotal}
							<br />
							Envío
							<br />
							Total: ${cr.total}
						</DivCol>
					))}
					</div>
				</CheckCart>
			</CheckContainer>
		</>
	);
};

export default Checkout;


/* <CheckData>
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
				</CheckData> */


/* 
<h1>Logo</h1>
			<h2 className="text-center">Checkout</h2>
			<CheckContainer>
				<CheckPayment>
					<form>
						<h2>Envío</h2>
						<div>
							<input type="checkbox" name="card" id="" />
							<label htmlFor="">Retiro en local</label>
							<input type="checkbox" name="cash" id="" />
							<label htmlFor="">Delivery</label>
						</div>
						<h2>Pago</h2>
						<br />
						<div>
							<input type="checkbox" name="card" id="" />
							<label htmlFor="">Débito</label>
							<input type="checkbox" name="cash" id="" />
							<label htmlFor="">Crédito</label>
						</div>
						<label htmlFor="name">Numero de la tarjeta</label>
						<input type="number"/>
						<label htmlFor="date">Fecha de vencimiento</label>
						<input type="date" />
						<label htmlFor="name">CVV</label>
						<input type="number" name="code" id="" />
					</form>
					<Button>Confirmar</Button>
				</CheckPayment>
				
				<CheckCart>
					<h1>Resumen</h1>
					{cart.map((cr) => (
						<DivCol key={cr.id}>
							{cr.name}
							<br />
							Subtotal: ${cr.subTotal}
							<br />
							Envío
							<br />
							Total: ${cr.total}
						</DivCol>
					))}
				</CheckCart>
				
			</CheckContainer> */

/* <div>
	<input
		type="checkbox"
		name="check"
		checked={checkbox1}
		onChange={() => {
			setCheckbox1(!checkbox1);
			setCheckbox2(false);
		}}
	/>
	Checkbox 1

	<input
		type="checkbox"
		name="check"
		checked={checkbox2}
		onChange={() => {
			setCheckbox2(!checkbox2);
			setCheckbox1(false);
		}}
	/>
	Checkbox 2

	{checkbox1 && (
		<div>Vista si Checkbox 1 está seleccionado</div>
	)}
	{checkbox2 && (
		<div>Vista si Checkbox 2 está seleccionado</div>
	)}
</div> */

/* 
<div>
					<form>
						<h2>Envío</h2>
						<div>
							<input type="checkbox" name="card" id="" checked={checkbox1}
								onChange={() => {
									setCheckbox1(!checkbox1);
									setCheckbox2(false);
								}} />
							<label htmlFor="">Retiro en local</label>
							<input type="checkbox" name="cash" id="" checked={checkbox2}
								onChange={() => {
									setCheckbox2(!checkbox2);
									setCheckbox1(false);
								}} />
							<label htmlFor="">Delivery</label>
						</div>
						{checkbox1 && (
							<div>
								<h2>Pago</h2>
								<br />
								<div>
									<input type="checkbox" name="card" id="" />
									<label htmlFor="">Débito</label>
									<input type="checkbox" name="cash" id="" />
									<label htmlFor="">Crédito</label>
								</div>
								<label htmlFor="name">Numero de la tarjeta</label>
								<input type="number" />
								<label htmlFor="date">Fecha de vencimiento</label>
								<input type="date" />
								<label htmlFor="name">CVV</label>
								<input type="number" name="code" id="" /></div>
						)}
						{checkbox2 && (
							<div>Vista si Checkbox 2 está seleccionado</div>
						)}
					</form>

				</div>
*/