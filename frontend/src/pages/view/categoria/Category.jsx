import { Outlet, useParams } from "react-router-dom";
import { CardList, Footer, Header } from "../../../components";
import Section from "./components/Section";
const Category = () => {
	const { idCategory } = useParams();
	document.title = "Carta";
	return (
		<>
			<Header />
			<CardList />
			{!idCategory ? <Section idCategory={idCategory} /> : <Outlet />}
			<Footer />
		</>
	);

	/* opacidad del 80% */
};

export default Category;
