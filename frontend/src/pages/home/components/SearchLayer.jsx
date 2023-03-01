import Items from "../../../components/Items";
import {
	ContainerSearchLayerStyled,
	ScrollContainerStyled,
	SearchLayerStyled,
} from "../styled-components/layout.styled";
import img from "/img/fondohome.png";
const SearchLayer = ({ active, template, isSuccess, handleDesActive }) => {
	return (
		<SearchLayerStyled img={img} size='cover' active={active}>
			<ContainerSearchLayerStyled>
				<button onClick={handleDesActive}>Cerrar</button>
				<ScrollContainerStyled>
					{isSuccess ? (
						<div>
							{template.map((item) => (
								<Items
									key={item.id}
									image={item.image.url}
									description={item.description}
									price={item.price}
									title={item.name}
								/>
							))}
						</div>
					) : (
						<div>loading...</div>
					)}
				</ScrollContainerStyled>
			</ContainerSearchLayerStyled>
		</SearchLayerStyled>
	);
};

export default SearchLayer;
