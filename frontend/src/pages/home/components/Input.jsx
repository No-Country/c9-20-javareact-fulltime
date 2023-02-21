const Input = ({ type, name }) => {
	return (
		<>
			<label htmlFor={name}>{name}</label>
			<input type={type} name={name} />
		</>
	);
};

export default Input;
