import { useResolvedPath } from "react-router-dom";
import { CardList } from "../../components";
import Header from "../../components/Header";
import CustomerFeedback from "./components/CustomerFeedback";
import SectionHero from "./components/SectionHero";
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

			{/* <Footer /> */}
		</>
	);
};

export default Home;
