import React from 'react'
import styled from 'styled-components'
import Items from '../components/Items'
const Div = styled.div`
display: flex;
margin:15px;
justify-content: space-around;
flex-wrap: wrap;
`;

const ItemListContainer = () => {
	return (
		<>
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
