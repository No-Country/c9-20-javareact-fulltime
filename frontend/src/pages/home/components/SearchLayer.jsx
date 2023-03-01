import Items from "../../../components/Items";
import {
	ButtonExitStyled,
	ContainerSearchLayerStyled,
	ScrollContainerStyled,
	SearchLayerStyled,
} from "../styled-components/layout.styled";
import exit from "/icons/exit.svg";
import img from "/img/fondoHome.jpg";
const SearchLayer = ({ active, template, isSuccess, handleDesActive }) => {
	return (
		<SearchLayerStyled img={img} size='cover' active={active}>
			<ButtonExitStyled onClick={handleDesActive} img={exit} size='cover' />
			<ContainerSearchLayerStyled>
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
