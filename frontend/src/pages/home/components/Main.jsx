import useSearch from "../hook/useSearch";
import CustomerFeedback from "./CustomerFeedback";
import SearchLayer from "./SearchLayer";
import SectionHero from "./SectionHero";
const Main = () => {
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
	);
};

export default Main;
