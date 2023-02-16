import { Outlet, useResolvedPath } from "react-router-dom";
import { CardList } from "../../components";
import Footer from "../../components/Footer";
import InputSearch from "../../components/InputSearch";
import CommentsSection from "./components/CommentsSection";
import ItemListContainer from "./components/ItemListContainer";
import { HomeContainer } from "./styled-components/HomeComponents";
const Home = () => {
	const { pathname } = useResolvedPath();

	return (
		<>
			{pathname === "/" ? (
				<HomeContainer>
					<CardList />
					<InputSearch />
					<ItemListContainer />
					<CommentsSection />
				</HomeContainer>
			) : (
				<Outlet />
			)}
			<Footer />
		</>
	);
};

export default Home;
