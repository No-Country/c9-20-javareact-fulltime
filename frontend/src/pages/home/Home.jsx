import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import MyAccount from "./components/MyAccount";
import Promotions from "./components/Promotions";
const Home = () => {
	return (
		<>
			<Outlet />
			<Promotions />
			<Contact />
			<MyAccount />
		</>
	);
};

export default Home;
