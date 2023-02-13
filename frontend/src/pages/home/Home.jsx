import { Outlet, useResolvedPath } from "react-router-dom";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";

const Home = () => {
	const { pathname } = useResolvedPath();

	return (
		<>
			{pathname === "/" ? (
				<>
					<Banner />
					<ItemListContainer />
					<Footer />
				</>
			) : (
				<>
					<Outlet />
				</>
			)}
		</>
	);
};

export default Home;
