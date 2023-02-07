const Details = ({ titleSummary, list }) => {
	return (
		<details>
			<summary>{titleSummary}</summary>
			<ul>
				{list.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</details>
	);
};

export default Details;
