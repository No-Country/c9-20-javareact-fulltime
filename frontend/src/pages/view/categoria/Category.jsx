import { Outlet, useParams } from "react-router-dom";
import { CardList, Footer, Header } from "../../../components";
import Section from "./components/Section";

const Category = () => {
	const { idCategory } = useParams();
	return (
		<>
			<Header />
			<CardList />
			{!idCategory ? <Section idCategory={idCategory} /> : <Outlet />}
			<Footer />
		</>
	);
};

export default Category;
