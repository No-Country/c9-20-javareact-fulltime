import React from 'react'
import { CardContainer, CardContent } from '../styled-components/CardComponents'

const Card = () => {
    return (
        <>
            <CardContainer>
                <h1>Pastas</h1>
                <CardContent>
                    <img src='\assets\react.svg' alt="image" />
                </CardContent>
            </CardContainer>
        </>
    )
}

export default Card