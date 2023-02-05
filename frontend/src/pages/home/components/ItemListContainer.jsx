<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import Items from '../components/Items'
=======
import React from "react";
import styled from "styled-components";
import Items from "./Items";
>>>>>>> 645b70dd1525f2e5b80a664dda24e45b5489acbf
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
