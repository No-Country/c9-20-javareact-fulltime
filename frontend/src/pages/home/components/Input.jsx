const Input = ({ type, name }) => {
	return (
		<>
			<label htmlFor={name}>{labelText}</label>
			<input type={type} name={name} />
		</>
	);
};

export default Input;
