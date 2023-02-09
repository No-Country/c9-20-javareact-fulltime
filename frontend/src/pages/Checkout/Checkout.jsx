import React from "react";
import {
    CheckCart,
    CheckContainer,
    CheckData,
    CheckPayment,
} from "./CheckoutStyled.jsx";
import { useSelector } from "react-redux";
import { DivCol } from '../../styled-components/layout/layout.styled'

const Checkout = () => {
    const cart = useSelector(state => state.card)
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
                    {cart.map(cr => <DivCol key={cr.id}>
                        <h1>
                            {cr.name}
                        </h1>
                        <h3>
                            Monto: {cr.amount}
                        </h3>
                        <h3>
                            Costo: ${cr.cost}
                        </h3>
                        <h3>
                            Subtotal: ${cr.subTotal}
                        </h3>
                        <h4>
                            Total: ${cr.total}
                        </h4>
                        <h4>
                            Descuento por código:{cr.DiscountCode}
                        </h4>
                    </DivCol>)}
                </CheckCart>
            </CheckContainer>
        </>
    )
}

export default Checkout;
