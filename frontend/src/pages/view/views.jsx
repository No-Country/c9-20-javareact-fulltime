import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import { HeaderSubTitle, HeroImage, Modal } from "../../components";
import { useFunctionalityModal } from "../../hooks";
import { Div } from "../../styled-components";
import Details from "./components/Details";
import ItemFood from "./components/ItemFood";
import {
	ContainerDetailsStyled,
	ViewStyled,
} from "./styled-components/layout.styled";
import react from "/assets/react.svg";

const View = ({ img }) => {
	const [comida, setComida] = useState()
	const { handleOpen, open, handleCloset } = useFunctionalityModal();
	const { pathname } = useResolvedPath();
	const nameFood = pathname.substring(1);
	const { idCategory } = useParams()


	useEffect(() => {
		fetch("../../../../api/fooView.json")
			.then(res => res.json())
			.then(json => {
				const filtrado = json.food.filter(food => food.name === idCategory)
				const lista = filtrado.shift()
				setComida(lista.list);
			})
			.catch(err => console.log(err));
	}, [])

	return (
		<ViewStyled>
			<Modal open={open} handleCloset={handleCloset} />

			<HeaderSubTitle title={nameFood} textAlign='center' level={1} />

			<HeroImage img={react} alt='comida' blockSize="268px" inlineSize='100%' />

			<span>15 A 20 Min de demora</span>
			// TODO BORRAR
			<ContainerDetailsStyled>
				<Details
					titleSummary='Programar pedido'
					list={["nose xd", "nose xd", "nose xd"]}
				/>
				<Details
					titleSummary='Retirar en el local'
					list={["nose xd", "nose xd", "nose xd"]}
				/>
			</ContainerDetailsStyled>

			<Div gap='46px'>
				{!comida ? <span>Loading...</span> :
					comida.map((elem) => {
						console.log(elem)
						return <ItemFood
							key={elem.id}
							title={elem.nameFood}
							description={elem.description} 
							price={elem.price}
							onClick={handleOpen} />
					})
				}
			</Div>
		</ViewStyled>
	);
};

export default View;
