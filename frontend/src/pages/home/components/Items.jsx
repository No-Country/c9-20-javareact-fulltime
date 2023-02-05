import React from 'react'
import styled from 'styled-components'
import { ItemButton, ItemContainer, ItemDescription, ItemImg } from '..styled-components/ItemsComponents'
const Items = () => {
return (
    <>
    <ItemContainer>
        <h1>Pizza</h1>
        <ItemImg>
        <img src="\vite.svg" alt="image" />
        </ItemImg>
        <ItemDescription>
        <h2>Descripcion</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus repellat impedit, iusto expedita distinctio, blanditiis corrupti libero veritatis quas iure vitae, atque cum exercitationem nam </p>
        </ItemDescription>
        <ItemButton>
            <h4>Agregar al Carrito</h4>
        </ItemButton>
    </ItemContainer>
    </>
)
}

export default Items