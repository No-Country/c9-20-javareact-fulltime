const Details = ({ titleSummary, list }) => {
	return (
		<details>
			<summary>{titleSummary}</summary>
			<ul>
				{list.map((item, index) => (
					// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index}>{item}</li>
				))}
			</ul>
		</details>
	);
};

export default Details;
