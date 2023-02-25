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
	return (
		<>
			<Header />
			<CardList />
			<main>
				<SectionHero
					handleActive={handleActive}
					handleDesActive={handleDesActive}
					textSearch={textSearch}
					onChange={handleOnchange}
				/>
				<SearchLayer
					template={template}
					active={active}
					isSuccess={isSuccess}
				/>
				<CustomerFeedback />
			</main>
			<Footer />
		</>
	);
};

export default Home;
