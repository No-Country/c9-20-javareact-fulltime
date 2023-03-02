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
								<Input
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
											pattern: /^[0-9]{1,16}$/,
											message: "Este campo solo acepta 16 caracteres numericos",
										}),
									}}
									error={errors.cardNumber}
								/>

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
