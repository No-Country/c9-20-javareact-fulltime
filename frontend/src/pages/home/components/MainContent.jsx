import { CardList, Footer, Header } from "../../../components";
import NavSide from "../../../components/NavSide";
import Main from "./Main";
const MainContent = () => {
	return (
		<>
			<NavSide />
			<Header />
			<CardList />
			<Main />
			<Footer />
		</>
	);
};

export default MainContent;
