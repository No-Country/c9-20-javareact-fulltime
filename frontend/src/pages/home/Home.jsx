import { CardList, Footer, Header } from "../../components";
import CustomerFeedback from "./components/CustomerFeedback";
import SearchLayer from "./components/SearchLayer";
import SectionHero from "./components/SectionHero";

const Home = () => {
	return (
		<>
			<Header />
			<CardList />
			<main>
				<SectionHero />
				<SearchLayer />

				<CustomerFeedback />
			</main>
			<Footer />
		</>
	);
};

export default Home;
