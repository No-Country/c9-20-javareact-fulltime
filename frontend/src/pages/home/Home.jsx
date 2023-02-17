import { useResolvedPath } from "react-router-dom";
import { CardList, Footer, Header } from "../../components";
import CustomerFeedback from "./components/CustomerFeedback";
import SectionHero from "./components/SectionHero";
Header
const Home = () => {
	const { pathname } = useResolvedPath();

	return (
		<>
			<Header />
			<CardList />
			<main>
				<SectionHero />
				<CustomerFeedback />
			</main>
			<Footer />
		</>
	);
};

export default Home;
