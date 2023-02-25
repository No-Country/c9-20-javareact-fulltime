import {
	ContainerSearchLayerStyled,
	ScrollContainerStyled,
	SearchLayerStyled,
} from "../styled-components/layout.styled";
import Items from "./Items";
const SearchLayer = ({ active, template, isSuccess, handleDesActive }) => {
	return (
		<SearchLayerStyled active={active}>
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
