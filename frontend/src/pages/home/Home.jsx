import { Outlet, useResolvedPath } from "react-router-dom";
import CardList from "./../../components/CardList";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import MyAccount from "./components/MyAccount";
import Promotions from "./components/Promotions";
const Home = () => {
	const { pathname } = useResolvedPath();
	return (
		<>
			<CardList />
			{pathname === "/" ? (
				<>
					<Banner />
					<Promotions />
					<Contact />
					<MyAccount />
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
