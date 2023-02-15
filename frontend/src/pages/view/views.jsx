import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import { HeaderSubTitle, HeroImage } from "../../components";
import { useFunctionalityModal } from "../../hooks";
import { Div } from "../../styled-components";
import ItemFood from "./components/ItemFood";

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
		<>
			<Modal open={open} handleCloset={handleCloset} />

			<HeaderSubTitle title={nameFood} textAlign='center' level={1} />

			<HeroImage img={img} alt='comida' blockSize="268px" inlineSize='100%' />

			<span>15 A 20 Min de demora</span>

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
		</>
	);
};

export default View;
