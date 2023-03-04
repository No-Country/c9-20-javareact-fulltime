import { useParams } from "react-router-dom";
import { HeaderSubTitle } from "../../../../components";
import useFilterComments from "../hook/useFilterComments";
import { SectionClient } from "../styled-components/layout.styled";
const SectionClients = () => {
	const { idFood } = useParams();
	const { items, isSuccess } = useFilterComments(idFood);
	return (
		<SectionClient>
			<HeaderSubTitle level={2} textAlign={"left"} title='Nuestros clientes' />
			{isSuccess ? (
				<>
					{items.length > 0 ? (
						items.map((item) => (
							<article key={item.id}>
								{/* <header>
							<h3>{item.nameUser}</h3>
							<p>{item.qualification}</p>
							<p>{item.date}</p>
						</header> */}

								<div>
									<p>{item.content}</p>
								</div>
							</article>
						))
					) : (
						<div>sin comentarios</div>
					)}
				</>
			) : (
				<div>laoding...</div>
			)}
		</SectionClient>
	);
};

export default SectionClients;
