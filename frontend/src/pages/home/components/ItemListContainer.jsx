import React from 'react'
import styled from 'styled-components'
import Items from '../components/Items'
import Card from './Card';
const Div = styled.div`
display: flex;
margin:15px;
justify-content: space-around;
flex-wrap: wrap;
h1{
	text-align: center;
}
`;

const ItemListContainer = () => {
	return (
		<>
			<Div>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</Div>
			<h1>Productos Destacados</h1>
			<Div>
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
			</Div>
		</>
	);
};

export default ItemListContainer;
