import { Outlet, useResolvedPath } from "react-router-dom";
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
					<InputSearch />
					<ItemListContainer />
					<CommentsSection />
					<Footer />
				</HomeContainer>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default Home;
