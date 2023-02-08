import { Outlet, useResolvedPath } from "react-router-dom";
import Contact from "./components/Contact";
import MyAccount from "./components/MyAccount";
import Promotions from "./components/Promotions";

const Home = () => {
	const { pathname } = useResolvedPath();
	console.log(pathname);
	return (
		<>
			{pathname === "/" ? (
				<>
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
