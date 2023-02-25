import { CardList, Footer, Header } from "../../components";
import CustomerFeedback from "./components/CustomerFeedback";
import SearchLayer from "./components/SearchLayer";
import SectionHero from "./components/SectionHero";
import useSearch from "./hook/useSearch";
const Home = () => {
	const {
		active,
		handleActive,
		handleDesActive,
		textSearch,
		handleOnchange,
		template,
		isSuccess,
	} = useSearch();
	document.title = "Country Resto";
	return (
		<>
			<Header />
			<CardList />
			<main>
				<SectionHero
					handleActive={handleActive}
					textSearch={textSearch}
					onChange={handleOnchange}
				/>
				<CustomerFeedback />
				<SearchLayer
					template={template}
					active={active}
					isSuccess={isSuccess}
					handleDesActive={handleDesActive}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Home;
