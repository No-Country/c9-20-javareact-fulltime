import { Outlet, useResolvedPath } from "react-router-dom";
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
