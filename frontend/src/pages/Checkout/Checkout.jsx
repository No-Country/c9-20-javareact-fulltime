import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardList, Header } from "../../components";
import { DivCol } from "../../styled-components/layout/layout.styled";
import {
	Button,
	CheckCart,
	CheckContainer,
	CheckData,
	ContainerFoodStyled,
	ContainerInputsStyled,
	ContainerStyled,
	ContainerTotalStyled,
	FieldsetStyled,
	Unwrapped,
} from "./CheckoutStyled.jsx";
import Checked from "./components/Checked";
import Input from "./components/Input";
import SubTitle from "./components/SubTitle";
import useConfirmation from "./hook/useConfirmation";

const Checkout = () => {
	const cart = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setError,
	} = useForm();

	const [selectedPaymentOption, setSelectedPaymentOption] = useState("debito");
	const { onSubmit, handleChange } = useConfirmation();

	return (
		<>
			<Header />
			<CardList />
			<CheckContainer>
				<CheckData onSubmit={handleSubmit(onSubmit)}>
					<SubTitle title='Envío' bottom={"-26%"} />
					<ContainerStyled>
						<Checked
							checked='local'
							id='local'
							labelText='Retiro en local'
							name='shipment'
							value='local'
							onChange={handleChange}
						/>
						<Checked
							id='delivery'
							labelText='Delivery'
							name='shipment'
							value='delivery'
							onChange={handleChange}
						/>
					</ContainerStyled>
					<SubTitle title='Pago' bottom={"-26%"} />
					<FieldsetStyled>
						<legend>Método de pago</legend>
						<Checked
							checked={selectedPaymentOption === "debito"}
							id='debito'
							labelText='Débito'
							name='check'
							onChange={() => setSelectedPaymentOption("debito")}
						/>
						<Checked
							checked={selectedPaymentOption === "credito"}
							id='credito'
							labelText='Crédito'
							name='check'
							onChange={() => setSelectedPaymentOption("credito")}
						/>
					</FieldsetStyled>

					{selectedPaymentOption === "debito" && (
						<>
							<ContainerInputsStyled>
								<Controller
									name="cardNumber"
									control={control}
									render={({ field }) => (
										<Input
											textLabel={"Número de tarjeta"}
											type='text'
											placeholder="1234 5678 9101 1121"
											inlineSize='476px'
											bottom='-23%'
											handleChange={handleChange}
										/>
									)}
									rules={{
										pattern: /^[0-9]{1,16}$/,
										message: "error",
									}}
								/>
								{/* <Input
									textLabel='Número de tarjeta'
									type='text'
									name="cardNumber"
									pattern={"^[0-9]{1,16}$"}
									placeholder="1234 5678 9101 1121"
									inlineSize='476px'
									messageError='Este campo solo acepta 16 caracteres numéricos'
									bottom='-23%'
									handleChange={handleChange}
									register={{
										...register("cardNumber", {
											required: "este campo es requerido",
											pattern: /^[0-9]{1,16}$/,
										}),
									}}
									error={errors.pattern}
								/> */}

								<Input
									textLabel='Fecha de vencimiento'
									type='date'
									name="dueDate"
									pattern={""}
									placeholder="MM/YY"
									inlineSize='233px'
									handleChange={handleChange}
								/>

								<Input
									textLabel='CVV'
									type='password'
									name="cvv"
									pattern={"^[0-9]{1,3}$"}
									placeholder="Ingrese su CVV"
									inlineSize='233px'
									messageError='Este campo solo acepta 3 caracteres numéricos'
									bottom='-35%'
									handleChange={handleChange}
								/>
							</ContainerInputsStyled>
							<Button>Confirmar</Button>
						</>
					)}
					{selectedPaymentOption === "credito" && (
						<>
							<Unwrapped>
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
					<SubTitle title='Resumen' bottom={"0%"} />
					<div>
						<DivCol>
							{cart.length !== 0 ? (
								cart.map((cr) => (
									<ContainerFoodStyled key={cr.id} bottom='-35%'>
										<strong>
											<span>{cr.amount}</span>X
											<span>{cr.name}</span>
										</strong>
										<p>${cr.subTotal}</p>
									</ContainerFoodStyled>
								))
							) : (
								<span>Sin Productos</span>
							)}

							<ContainerTotalStyled>
								<div>
									<b>Subtotal:</b> <b>${total}</b>
								</div>
								<div>
									<b>Envió </b>
									<span>-</span>
								</div>
								<div>
									<div>
										<b>Total:</b>
										<b>${total}</b>
									</div>
									<span>Retiro en local: Urquiza 2345 - Capital</span>
								</div>
							</ContainerTotalStyled>
						</DivCol>
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
