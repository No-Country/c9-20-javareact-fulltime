import {
	ContainerSearchLayerStyled,
	SearchLayerStyled,
} from "../styled-components/layout.styled";

const SearchLayer = () => {
	return (
		<SearchLayerStyled active={active}>
			<ContainerSearchLayerStyled>
				<header>
					<h2>Resultados</h2>
				</header>

				<div>
					{/* 					{isSuccess ? (
						<>
							{listSearch.map((item) => (
								<Items
									image={item.image.url}
									description={item.description}
									price={item.price}
									title={item.name}
								/>
							))}
						</>
					) : (
						<div>loading...</div>
					)} */}
				</div>
			</ContainerSearchLayerStyled>
		</SearchLayerStyled>
	);
};

export default SearchLayer;
