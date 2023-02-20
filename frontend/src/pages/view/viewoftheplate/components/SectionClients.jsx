import { useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import useFilterComments from "../hook/useFilterComments";
import { ClientsBoxStyled } from "../styled-components/layout.styled"
import Star from "../../../../../public/icons/Star.svg"

const SectionClients = () => {
	const { idCategory, idFood } = useParams();
	const { items } = useFilterComments(idCategory, idFood);

	return (
		<section>
			<HeaderSubTitle level={2} textAlign={"left"} title='Nuestros clientes' />

			{items.length > 0 ? (
				items.map((item) => (
					<ClientsBoxStyled key={item.id}>
						<header>
							<h3>{item.nameUser}</h3>
							<div>
								{Array(item.qualification).fill(<img src={Star} alt="icon star" />)}
							</div>
							<p>{item.date}</p>
						</header>

						<div>
							<p>{item.comment}</p>
						</div>
					</ClientsBoxStyled>
				))
			) : (
				<div>sin comentarios</div>
			)}
		</section>
	);
};

export default SectionClients;
