import { useState } from "react";
import { useForm } from "react-hook-form";
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
		formState: { errors },
	} = useForm();

	const [selectedPaymentOption, setSelectedPaymentOption] = useState("debito");
	const { handleChange, shipment } = useConfirmation();
	const onSubmit = (data) => {
		console.log(data);
		navigate("/thanks");
	};
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
								<Input
									textLabel='Número de tarjeta'
									type='text'
									name="cardNumber"
									placeholder="1234 5678 9101 1121"
									inlineSize='476px'
									bottom='-23%'
									register={{
										...register("cardNumber", {
											required: "Campo requerido",
											pattern: {
												value: /^[0-9]{1,16}$/,
												message:
													"Este campo solo acepta 16 caracteres numéricos",
											},
										}),
									}}
									error={errors.cardNumber}
								/>

								<Input
									textLabel='Fecha de vencimiento'
									type='date'
									name="dueDate"
									placeholder="MM/YY"
									inlineSize='233px'
									bottom='-23%'
								/>

								<Input
									textLabel='CVV'
									type='password'
									name="cvv"
									placeholder="Ingrese su CVV"
									inlineSize='233px'
									bottom='-22%'
									register={{
										...register("cvv", {
											required: "Campo requerido",
											pattern: {
												value: /^[0-9]{1,3}$/,
												message:
													"Este campo solo acepta 3 caracteres numéricos",
											},
										}),
									}}
									error={errors.cvv}
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
									<span>{shipment ? "$150" : "-"}</span>
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
