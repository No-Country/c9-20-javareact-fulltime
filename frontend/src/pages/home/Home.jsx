import { Outlet, useResolvedPath } from "react-router-dom";
import Footer from "../../components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const Home = () => {
	const { pathname } = useResolvedPath();

	return (
		<>
			{pathname === "/" ? (
				<>
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
