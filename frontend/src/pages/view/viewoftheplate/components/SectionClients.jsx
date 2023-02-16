import { useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import useFilterComments from "../hook/useFilterComments";
const SectionClients = () => {
	const { idCategory, idFood } = useParams();
	const { items } = useFilterComments(idCategory, idFood);

	return (
		<section>
			<HeaderSubTitle level={2} textAlign={"left"} title='Nuestros clientes' />

			{items.length > 0 ? (
				items.map((item) => (
					<article key={item.id}>
						<header>
							<h3>{item.nameUser}</h3>
							<p>{item.qualification}</p>
							<p>{item.date}</p>
						</header>

						<div>
							<p>{item.comment}</p>
						</div>
					</article>
				))
			) : (
				<div>sin comentarios</div>
			)}
		</section>
	);
};

export default SectionClients;
