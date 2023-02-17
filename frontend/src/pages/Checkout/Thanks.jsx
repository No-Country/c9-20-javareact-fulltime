import React, { useEffect, useState } from 'react';
import { ThxContainer } from './CheckoutStyled.jsx';
import Loader from "./Loader.jsx";

const Thanks = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <ThxContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <h1>Gracias por su compra</h1>
                    <br />
                    <p>Icono de carrito</p>
                    <br />
                    <h2>Orden #123RGR231567Y Confirmado</h2>
                </div>

            )}
        </ThxContainer>
    );
}

export default Thanks;
