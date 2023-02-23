import { CardList, Footer, Header } from "../../components";
import CustomerFeedback from "./components/CustomerFeedback";
import SectionHero from "./components/SectionHero";

const Home = () => {
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
