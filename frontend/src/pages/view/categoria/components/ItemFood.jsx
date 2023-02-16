import { Link, Outlet, useParams } from "react-router-dom";
import { HeaderSubTitle, HeroImage } from "../../../../components";
import { ItemFoodStyled } from "../styled-components/layout.styled";


const ItemFood = ({ description, price, name, nameFood, id }) => {
	const { namePath } = useParams();

	return (
		<>
			{!namePath ? (
				<ItemFoodStyled>
					<Link to={`/categoria/${nameFood}/${id}`}>
						<HeroImage
							img={react}
							alt='comida'
							blockSize="196px"
							inlineSize='100%'
						/>
						<div>
							<HeaderSubTitle title={name} textAlign='left' level={3} />
							<p>{description}</p>
							<footer>${price}</footer>
						</div>
					</Link>
				</ItemFoodStyled>
			) : (
				<>
					<Outlet />
				</>
			)}
		</>
	);
};

export default ItemFood;
